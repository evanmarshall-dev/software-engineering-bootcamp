const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

// TEST code.
router.get("/new", async (req, res) => {
  res.render("foods/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Push req.body (the new form data object) to the
    currentUser.foods.push(req.body);
    // Save changes to the user
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/foods`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

router.get("/", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Render index.ejs, passing in all of the current user's
    res.render("foods/index.ejs", {
      foods: currentUser.foods,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:foodId", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.foods.id(req.params.foodId);
    res.render("foods/show.ejs", {
      food: food,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

router.delete("/:foodId", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Use the Mongoose .deleteOne() method to delete
    currentUser.foods.id(req.params.foodId).deleteOne();
    // Save changes to the user
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/foods`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:foodId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.foods.id(req.params.foodId);
    res.render("foods/edit.ejs", {
      food: food,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:foodId", async (req, res) => {
  try {
    // Find the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.foods.id(req.params.foodId);
    food.set(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/foods/${req.params.foodId}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
