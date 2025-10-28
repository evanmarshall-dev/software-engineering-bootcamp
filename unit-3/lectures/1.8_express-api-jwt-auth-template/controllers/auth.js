const express = require("express");
const router = express.Router();
// Add bcrypt and the user model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// Add in constant for the number of rounds
const saltRounds = 12;

// ? router.post("/sign-up", (req, res) => {
//   ? res.json({ message: "Sign up route" });
// ? });

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
      hashedPassword: bcrypt.hashSync(req.body.password, saltRounds),
    });

    const payload = {
      username: user.username,
      _id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7 days",
    });

    res.status(201).json({ token });
  } catch (err) {
    // Send the error message to the client
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
