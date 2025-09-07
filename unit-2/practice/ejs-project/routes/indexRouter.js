const express = require("express");
const indexRouter = express.Router();

function homeRouteHandler(req, res) {
  res.render("home.ejs", {
    message: "Welcome to the Home Page! 🏠",
    showMessage: true,
  });
}

// ROUTES
indexRouter.get("/", homeRouteHandler);

module.exports = indexRouter;
