// NOTES: Sign in and sign up are two different tokens but same payload and secret used to sign them. They are for two different scenarios for signing in.

const express = require("express");
const router = express.Router();
// Add bcrypt and the user model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Add in constant for the number of rounds
const saltRounds = 12;

// ? router.post("/sign-up", (req, res) => {
//   ? res.json({ message: "Sign up route" });
// ? });

// Sign up flow.
router.post("/sign-up", async (req, res) => {
  try {
    // Check if the username is already taken
    const userInDatabase = await User.findOne({ username: req.body.username });

    if (userInDatabase) {
      return res.status(409).json({ err: "Username already taken." });
    }

    // Create a new user with hashed password
    const user = await User.create({
      username: req.body.username,
      // Use bcrypt to hash the password so it is not stored in plain text.
      // The password is encrypted so not easily decoded like an encoded jwt token.
      hashedPassword: bcrypt.hashSync(req.body.password, saltRounds),
    });

    // Create a payload and sign a jwt token.
    // The payload, when looking at the token, is the value between the two dots.
    // Can test by running the POST request in Postman for sign-up route.
    const payload = {
      username: user.username,
      _id: user._id,
    };

    // Send off token to client.
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7 days",
    });

    res.status(201).json({ token });
  } catch (err) {
    // Send the error message to the client
    res.status(500).json({ err: err.message });
  }
});

// Sign in flow.
// With sign-up the password is hashed but we need to compare the hashed password with the plain text password entered at sign-in. The bycrypt library has a compareSync method to do this.
router.post("/sign-in", async (req, res) => {
  try {
    // Look up the user by their username in the database
    const user = await User.findOne({ username: req.body.username });
    // If the user doesn't exist, return a 401 status code with a message
    if (!user) {
      return res.status(401).json({ err: "Username not found." });
    }

    // Check if the password is correct using bcrypt. This will be a boolean data type.
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password, // plain text password from request.
      user.hashedPassword // hashed password from database.
    );
    // If the password is incorrect, return a 401 status code with a message
    if (!isPasswordCorrect) {
      return res.status(401).json({ err: "Invalid credentials." });
    }

    // Construct the payload.
    // Note that the payload is identical to the one we used in the sign-up route. We typically want to keep the payload consistent across our routes to ensure that the data the client receives is identical whether the user just signed up or is signing in for the hundredth time.
    const payload = {
      username: user.username,
      _id: user._id,
    };

    // Create the token, attaching the payload
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    // ? res.status(200).json({ message: "Signing in!" });
    // Send the token instead of the message.
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
