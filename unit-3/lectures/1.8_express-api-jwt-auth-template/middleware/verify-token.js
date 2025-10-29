// At this stage, we’re authenticating users when they sign in to our app by providing them a token to include in future requests. Next, we want to use those tokens to protect specific routes from unauthenticated or unauthorized users.
// We could write code to handle this in each controller function attached to a protected route, but that would not be very DRY.
// Instead, let’s create middleware that can be used on any route requiring authentication before proceeding.

// From controllers/test-jwt.js
// ? router.post("/verify-token", (req, res) => {
//   ? try {
//     ? const token = req.headers.authorization.split(" ")[1];
//     ? const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     ? res.json({ decoded });
//   ? } catch (err) {
//     ? res.status(401).json({ err: "Invalid token." });
//   ? }
// ? });

// In the Setting up JWTs lesson, we wrote a function that accepts a token (via req.headers) and then verifies it in /controllers/test-jwt.js. We can refactor that code into middleware that can be reused across multiple routes.
// INSTEAD of sending a response to a successful token the function will now pass the request off to the next response handler.
// This means adding a third parameter in addition to req and res - next - which will let us invoke the next function in the request-response cycle, just like any other middleware function.
// Secondly, we’ll want to change what we do with the decoded payload in the token. In our test function above, we responded to the request with the decoded payload. INSTEAD, we’ll want to store information about the authenticated user on the request object before passing that request along to its next function.
// That way, any controller function can tell what user a request is coming from, allowing for user-specific data queries and authorization of certain actions, among other things. We’ll assign the token’s decoded.payload to req.user - the verifyToken function is acting as intermediary middleware, so we don’t need to respond with anything yet.
// Finally, we call next().

// We'll need to import jwt to use the verify method
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Assign decoded payload to req.user. This will allow us to access user information in the route handler that uses this middleware. This differs from our previous implementation where we sent the decoded token back in the response (res.json({ decoded });).
    // Property of user added to req object.
    req.user = decoded.payload;

    // Call next() to invoke the next middleware function.
    next();
  } catch (err) {
    // If any errors, send back a 401 status and an 'Invalid token.' error message
    res.status(401).json({ err: "Invalid token." });
  }
}

// We'll need to export this function to use it in our controller files
module.exports = verifyToken;
