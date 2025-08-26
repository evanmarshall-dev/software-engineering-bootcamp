// This file will look similar to the way we set up routes in server.js, with one key exception: an express built-in router object will replace the app object, and we can plug in that router object later in server.js.

// With this code in place, Express will now funnel any requests starting with /auth to the authController. The authController is essentially a set of routes defined in auth.js, managed by the router object.
// For each of these routes, the URL path handled by the authController will already have /auth as its base. Therefore, within the auth.js file, we only need to specify the remaining part of the URL path, excluding /auth, for each route.

// Now that our authentication routes are defined in a separate controller file, our route handler function will look a little different.
// Remember, we’re using a router object defined by express instead of the app object we’re used to, so all the routes should be defined with router instead of app.

// visit localhost:PORT/auth/sign-up in your browser. The server.js file handles the /auth section of the URL, and the sign-up is handled by the controller function we just wrote.

const express = require("express");
const router = express.Router();
// Since we want this route to create a new User in the database, we’ll first need to import the User model into this file.
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

// Controller function.
router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs");
});

router.post("/sign-up", async (req, res) => {
  // ? res.send("Form submission accepted!");
  // To make sure somebody hasn’t already taken the username being submitted, we need to check the database for any existing user with that username.
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (userInDatabase) {
    return res.send("Username already taken.");
  }
  // We only need a simple comparison of values already submitted through the form.
  if (req.body.password !== req.body.confirmPassword) {
    return res.send("Password and Confirm Password must match");
  }
  // If all the previous validations are successful, we’re ready to create the user in our database.
  // These tools ensure that passwords are securely encrypted before being stored in the database. For this we’ll use Bcrypt, a widely-recognized hashing library.
  // Using the bcrypt library, we will perform what’s called a hashing operation which will scramble the user’s password into a difficult-to-decrypt string. The hashing function also requires the use of a salt string, which ensures that even if two users have the exact same passwords, we end up with different encrypted strings in the database.
  // The number 10 in the hashSync method represents the amount of salting we want the hashing function to execute: the higher the number, the harder it will be to decrypt the password. However, higher numbers will take longer for our application when we’re checking a user’s password, so we need to keep it reasonable for performance reasons.
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  // With all of our validations in place, we can finally create the new User in the database.
  const user = await User.create(req.body);
  // Sign user in upon sign up.
  req.session.user = {
    username: user.username,
  };

  req.session.save(() => {
    res.redirect("/");
  });
  // ? res.send(`Thanks for signing up ${user.username}`);
});

// We can add a simple route to our authController to render this template.
router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in.ejs");
});

// Once a user submits their request from the sign in page, we need a route set up to handle this request. Let’s start with the simplest, testable version of this route, so we can immediately confirm a working form submission.
router.post("/sign-in", async (req, res) => {
  // ? res.send("Request to sign in received!");
  // First, we need to grab the user from the database, using the username provided in the form. If there is no such user, we have our first failure condition, and can send back an appropriate response. For security reasons, we will recycle the same, vague message for all sign in failures, so that a prospective hacker won’t have any clues about what exactly is failing.
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (!userInDatabase) {
    return res.send("Login failed. Please try again.");
  }
  // Inside this route, we will again rely on bcrypt to determine if the entered password matches the one stored in the database. The bcrypt library has a compareSync method to check if the plain-text password entered by the user matches the hashed password in the database. It hashes the user’s input with the same method used for the stored password and compares the two hashes. This method returns a true or false response based on whether the passwords match. If the result is false, we send the same failure message as before.
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  );
  if (!validPassword) {
    return res.send("Login failed. Please try again.");
  }
  // If the route handler function has gotten this far, it means we have a successful attempt to sign in to the application.
  // There are various methods to manage signed-in users in applications. For ours, we’ve chosen to implement a session-based authentication strategy.
  // Now, the catch with cookies is that they reside in the browser, making everything in them accessible to the user. That’s why we cant store sensitive data like passwords in cookies — the front-end isn’t secure.
  // In our session-based strategy, however, we use cookies differently. They’ll hold encrypted information about the signed-in user, which only our server can decrypt. This encrypted information forms a session.
  // When a user signs into our application, they start a session that marks them as authenticated.
  // Future requests from this user will carry this session in their browser cookie. Our server reads this session to verify if the request is from a signed-in user and, if so, identify who that user is.
  // If a request is made to a protected route without this session, the server responds with an error message.
  // Now that we’ve set up our session middleware, we can finalize the sign-in route in our route handler. After a user’s request successfully passes the initial validations, our next step is to establish a new session for them. This involves storing their username in the session. By doing so, we can identify and authenticate the user for their future requests to our application.
  // With the addition of our middleware, a session object has been attached to all incoming requests, so we can access it in routes through the req object directly with req.session.user = {username: userInDatabase.username,};
  // This code sets the user retrieved from the database as the user in the newly created session.
  // ? req.session.user = {
  //   ? username: userInDatabase.username,
  //   ? _id: userInDatabase._id,
  // ? };
  // ? res.redirect("/");
  // Previously, our sessions lived in the internal memory of the server, so we didn’t need to worry about the time it took to update these objects before proceeding to the next line of code.
  // Now that sessions live in MongoDB, however, any updates to the session object are asynchronous operations that take just as much time as any of the other database calls throughout our app. This means we need to wait for the operation to complete before proceeding to the next part of a user’s journey.
  // This means we’ll have to go in to all the controller functions that modify req.session and revise them to use the asynchronous callback pattern provided by express-session.
  req.session.user = {
    username: userInDatabase.username,
  };

  req.session.save(() => {
    res.redirect("/");
  });
});

// The sign out link will send a GET request to /auth/sign-out, so we should prepare to accept that request in the auth controller. Let’s set up a minimal route with a res.send for testing purposes.
// To sign a user out, we need to get rid of the session attached to the req object. Lucky for us, the express session object has a built-in method conveniently named destroy, allowing us to easily delete the session using req.session.destroy().
router.get("/sign-out", (req, res) => {
  //   ? req.session.destroy();
  //   ? res.redirect("/");
  // Similarly, we want to avoid the race condition described above in our sign out process, so let’s update that using the same pattern.
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
