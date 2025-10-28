const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Route to sign a token.
router.get("/sign-token", (req, res) => {
  // ? res.json({ message: "You are authorized!" });
  // Mock user object added
  const user = {
    _id: 1,
    username: "GingaRanga",
    password: "test",
  };
  // Create a token using the sign method
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  // Send the token back to the client
  res.json({ token });
});

// Route to verify a token.
// ? router.post("/verify-token", (req, res) => {
// ? res.json({ message: "Token is valid." });
// ? const token = req.headers.authorization;
// ? const token = req.headers.authorization.split(" ")[1];
// Send the token back to the client
// ? res.json({ token });
// ? });
// Complete the verify-token route.
router.post("/verify-token", (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Add in verify method
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({ decoded });
  } catch (err) {
    res.status(401).json({ err: "Invalid token." });
  }
});

module.exports = router;
