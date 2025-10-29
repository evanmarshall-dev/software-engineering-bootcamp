// NOTES: We now have an Express app that authenticates and authorizes users through a JWT approach. Consider it the start of a re-usable boilerplate for any Express API that needs user management. However, this isn’t the full picture of user management. For a complete system, you’d want to add email verification, password resets, oAuth integration, passkey support, and other key features expected in applications managing users.

// We’ll implement two routes to test our middleware - one that protects against unauthenticated users, and another that protects against both unauthenticated and unauthorized users. Both routes will interact with our User model. So, let’s create a controllers/users.js file to handle these new routes.

// Our first route will only protect against unauthenticated users using the verifyToken() middleware. It will show a list of all users in the database. Here are the specs for the route:
// - Route: /users
// - Method: GET
// - Response Body: [ { username : <user's username>, _id : <user's _id> } ]
// - Below is an unprotected version of the route.

// Now, test this route by sending a GET request to http://localhost:3000/users. You should be able to get a response even when sending a request through your browser, which has no token and is, therefore, unauthenticated. This means our route is open to anyone.

// Now that we’ve set up our verify-token middleware, including it in the users route will take a small adjustment.
// When a request hits this route, verifyToken() is called before the anonymous controller function that handles the response. As a result, only authenticated users can access these routes; a non-verified user will be returned an Invalid token. message, the request would not get past the verifyToken() middleware function, and the controller function would never be invoked.
// Test the route again. Access denied!
// Now enable the same Authorization options in Postman for your http://localhost:3000/users route. Select Bearer Token as the type and paste in the token given when the user with that _id posts to the signin route.

// A classic use case for authentication and authorization is the profile page of any web application, showing the user their personal details and allowing them to make updates to their account. Since no one else should be able to access this, we should protect it from unauthenticated and unauthorized users. These are the specs of the route we want:
// - Route: /users/:userId
// - Method: GET
// - Response Body: { username : <user's username>, _id : <user's _id> }

const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Add to your imports at the top
const verifyToken = require("../middleware/verify-token");

// Add the verifyToken middleware to protect this route.
router.get("/", verifyToken, async (req, res) => {
  try {
    // Get a list of all users, but only return their username and _id
    const users = await User.find({}, "username");
    // If we wanted username and email we would add with a space.
    // ? const users = await User.find({}, "username email");

    res.json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// Let’s start with the following unprotected route that will let anyone at all access the details of any user.
// Now let’s add the verifyToken middleware to the user’s show route so that only authenticated users can access it.
// Again, you’ll be denied until you enable the same Authorization options in Postman for your http://localhost:3000/users/:userId route. Select Bearer Token as the type and paste in the token given when the user with that _id posts to the signin route.

// For many routes, authentication is enough. The dashboard of most web applications will be accessible to any signed-in user but will reject requests from someone not yet signed in.
// This user route, however, is also interested in authorizing the user and only allowing access if the request comes from that user.
// Fortunately, our verifyToken middleware stores the _id of the request’s user in the req object, so we can make another adjustment to the top of our controller function.
// A more sophisticated authorization approach would grant users specific roles and permission levels, allowing an application’s administrators to have access to any user’s resources.

// Added verifyToken middleware to protect this route and authorize user.
router.get("/:userId", verifyToken, async (req, res) => {
  try {
    // If the user is looking for the details of another user, block the request.
    // Send a 403 status code to indicate that the user is unauthorized.
    if (req.user._id !== req.params.userId) {
      return res.status(403).json({ err: "Unauthorized" });
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ err: "User not found." });
    }

    res.json({ user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
