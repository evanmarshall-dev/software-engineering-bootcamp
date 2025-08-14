const express = require("express");
const menuRouter = express.Router();

function menuRouteHandler(req, res) {
  res.render("menu.ejs", {
    message: "Welcome to the Menu Page! 🍽️",
    showMessage: true,
  });
}

// ROUTES
menuRouter.get("/", menuRouteHandler);

module.exports = menuRouter;
