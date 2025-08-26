const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : 3000;

// Import the authController, which contains our router object, into server.js. This should be done right after we declare the port variable.
const authController = require("./controllers/auth.js");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan("dev"));
// Every time a user accesses a route in our application, we’ll likely need to perform actions related to their session, which sounds like a great case for middleware! This middleware will automatically manage session data for each user request, ensuring a seamless and secure user experience throughout our application.
// This code integrates session management into our application using the express-session library. It configures the session middleware to securely manage user sessions with a secret key, specifies not to resave sessions that haven’t changed, and allows for storing new, uninitialized sessions.
app.use(methodOverride("_method"));
app.use(morgan("dev"));
// ? app.use(
//   ? session({
//     ? secret: process.env.SESSION_SECRET,
//     ? resave: false,
//     ? saveUninitialized: true,
//   ? })
// ? );
// Then, we modify the session app.use statement to include a store property inside the options object provided to our session middleware. If you’re wondering where we got this from, it’s straight from the connect-mongo documentation linked above!
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
// Next, we need to think strategically about where to place this middleware within the request processing pipeline. Since our aim is to make the user variable available to all view routes, it’s crucial to insert this middleware early in the route chain. However, it’s also important that it comes after our session middleware, as it relies on session data.
// With this in mind, we should add our passUserToView middleware immediately after the session middleware in server.js. This ensures that every request has access to the user session data before reaching any route endpoints.
app.use(passUserToView);

// ROUTES
// To test the functionality of user sign-in, we need to update our landing page to reflect the user’s sign-in status. This is done by utilizing the req.session object, which is now attached to every request due to our session middleware.Here’s how we’ll do this: In our landing page’s route, we’re going to send a user variable to our index.ejs template. This variable is assigned the value of req.session.user, a property we just set during the sign-in process.
// If user is undefined (which happens when req.session.user is not set), it means the visitor isn’t signed in. In this case, our template will treat them as a guest, showing options to sign up or sign in.
// If user has a value (meaning req.session.user is set), the visitor is recognized as a signed-in user. We can then personalize their greeting and omit the sign-up and sign-in links, as they’re already authenticated.
// ? app.get("/", (req, res) => {
//   ? res.render("index.ejs", {
//     ? user: req.session.user,
//   ? });
// ? });
// If this middleware works properly, it means no other route should ever need to add req.session.user to the context object being provided to a render statement. Let’s test this out by removing the context object from our landing page route.
// The user should still show up on this page thanks to our middleware! If you want to create a standard navbar with sign-in/sign-out buttons, now would be the time to do so. All templates will have access to a user variable you can create conditionals around.
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Instruct our Express app to use this authController for handling requests that match the /auth URL pattern.
app.use("/auth", authController);

// We can now create a route handler for the /vip-lounge requests, and since this route won’t need to be re-used in future applications, let’s just add it to server.js.
// Note the clean, simple if statement that relies on the truthiness of the req.session.user value. The req.session.destroy method would have eliminated any properties on the session object, so if the user has signed out, this property won’t exist.
// So far, we’ve protected our route by putting a simple if statement inside the route itself. You can imagine, however, that this would be repeated many times throughout our application, as many routes should be protected from unauthenticated or unauthorized users. Sounds like an opportunity to modularize and refactor.
// ? app.get("/vip-lounge", (req, res) => {
//   ? if (req.session.user) {
//     ? res.send(`Welcome to the party ${req.session.user.username}.`);
//   ? } else {
//     ? res.send("Sorry, no guests allowed.");
//   ? }
// ? });
// Now we can refactor our vip-lounge route to include this middleware before reaching the regular route handler.
// Interestingly, a route controller can accept any number of handler functions as inputs, so we can just add this function directly before the (req, res) callback.
// For future routes that require the user to be signed in, you can now simply import the middleware function we’ve created and plug it in the exact same way.
app.get("/vip-lounge", isSignedIn, (req, res) => {
  res.send(`Welcome to the party ${req.session.user.username}.`);
});

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
