const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
// ? const morgan = require("morgan");
const session = require("express-session");
// Now that we have our middleware created, we need to mount and use it in our server. Import the middleware just below our other dependencies at the top of server.js.
const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

const authController = require("./controllers/auth.js");
const foodsController = require("./controllers/foods.js");
const usersController = require("./controllers/users.js");

const port = process.env.PORT ? process.env.PORT : "3000";

const path = require("path");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// ? app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToView);

app.get("/", (req, res) => {
  // Check if the user is signed in
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/foods`);
  } else {
    // Show the homepage for users who are not signed in
    res.render("index.ejs");
  }
});

app.use("/auth", authController);
app.use(isSignedIn);
app.use("/users/:userId/foods", foodsController);
app.use("/users", usersController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
