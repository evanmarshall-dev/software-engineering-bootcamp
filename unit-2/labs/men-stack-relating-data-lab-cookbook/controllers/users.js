const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// GET /users - Community index page showing all users
router.get("/", async (req, res) => {
  try {
    // Get all users and populate their foods for display
    const users = await User.find({}).select("username foods");

    res.render("users/index.ejs", {
      users: users,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// GET /users/:id - Show individual user's pantry
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const viewedUser = await User.findById(userId).select("username foods");

    if (!viewedUser) {
      return res.redirect("/users");
    }

    res.render("users/show.ejs", {
      viewedUser: viewedUser,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/users");
  }
});

module.exports = router;
