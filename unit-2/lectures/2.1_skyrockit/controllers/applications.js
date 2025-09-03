// NOTES:
// With our application schema set up, our next step is to create the logic that enables users to perform CRUD operations on their data. We’re going to take a step-by-step approach, working on one part of the app at a time. This includes setting up the routes, creating the views (pages), and building CRUD functionality one page at a time. This structured approach allows us to implement and test each step before moving on to the next.
// 1. First, import Express and create a router.
// 2. Then, import the User model so we will have access to it in our CRUD routes.
// 3. Finally, make sure to export the router so that we can use it in our main server file.

const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

// we will build out our router logic here

module.exports = router;
