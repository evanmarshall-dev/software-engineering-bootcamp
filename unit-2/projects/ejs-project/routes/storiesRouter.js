const express = require("express");
const storiesRouter = express.Router();

function storyRouteHandler(req, res) {
  res.render("stories.ejs", {
    message: "Welcome to the Stories Page! 📖",
    showMessage: true,
  });
}

// stories routes
// Gets all users in the database(db) and returns them to the client.
storiesRouter.get("/", storyRouteHandler);

module.exports = storiesRouter;
