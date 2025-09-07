// NOTES:
// I can now remove "/users" from the route path now that we have a separate router for users.
// You also have to replace "app" with usersRoute.

const express = require("express");
const User = require("../models/user");
const usersRouter = express.Router();

function userRouteHandler(req, res) {
  res.render("users.ejs", {
    message: "Welcome to the Users Page! 👥",
    showMessage: true,
  });
}

function userByIdRouteHandler(req, res) {
  const userId = req.params.id;
  res.render("user.ejs", {
    message: `Welcome to the User Page for User ID: ${userId} 👤`,
    showMessage: true,
  });
}

// user routes
usersRouter.get("/", userRouteHandler);

// Get user by id.
usersRouter.get("/:id", userByIdRouteHandler);

// Create new user.
usersRouter.post("/", (req, res) => {
  console.log("Reached the 'users/' POST route");
  console.log(req.body); // The data that the user submitted.
  // In prod you would validate props for first name, last name, password, and email.
  // We would also hash and salt the password.
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }; // Assuming the body contains user data.

  // Use the mongoose model imported from models to post to users collection.
  // This uses mongoose's create method. This is an async action so you want to use async await.
  const createUser = async () => {
    try {
      await User.create(newUser);
      res.status(201).send("User created successfully");
      res.redirect("/");
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  createUser();
});

module.exports = usersRouter;
