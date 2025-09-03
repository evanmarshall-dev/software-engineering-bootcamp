const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
// Now that we have our middleware created, we need to mount and use it in our server. Import the middleware just below our other dependencies at the top of server.js.
const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

const authController = require("./controllers/auth.js");

const port = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// ** The passUserToView middleware should be included before all our routes, including our homepage, just in case we want to include conditional rendering with a user’s details. If there is no signed in user the locals object will be set to null.
app.use(passUserToView);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});

app.use("/auth", authController);
// ** For this application, users must be signed in to view any of the routes associated with their applications. Therefore, isSignedIn should be placed above the applications controller, but not before auth. If above homepage then you will have to be signed in to even access that route.
app.use(isSignedIn);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
