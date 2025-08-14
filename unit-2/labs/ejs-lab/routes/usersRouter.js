// NOTES:
// I can now remove "/users" from the route path now that we have a separate router for users.
// You also have to replace "app" with usersRoute.

const express = require("express");
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
  const newUser = req.body;
  // Logic to save the new user to the database
  res.redirect("/");
});

module.exports = usersRouter;
