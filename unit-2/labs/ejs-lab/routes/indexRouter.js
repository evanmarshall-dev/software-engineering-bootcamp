const express = require("express");
const indexRouter = express.Router();

function homeRouteHandler(req, res) {
  console.log("Rendering home.ejs");
  res.render("home.ejs");
}

// ROUTES
indexRouter.get("/", homeRouteHandler);

module.exports = indexRouter;
