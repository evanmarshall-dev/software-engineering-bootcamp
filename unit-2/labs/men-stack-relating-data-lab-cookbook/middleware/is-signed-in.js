// NOTES:
// Middleware requires three params (request object (req), response object (res), and representing the next function in the long line of middleware and route handlers that a request is processed through. (next)).
// The isSignedIn function’s purpose is to check if a user is signed in and authorized to access certain routes or resources.
// The function checks if there’s a user object in the session (provided by req.session.user). This is typically used to confirm that a user is logged in.
// If the user is logged in, next() is called, allowing the request to proceed to the next middleware or route handler. If this check fails, however, it moves to redirect the user to the sign-in page, strongly suggesting to the user that, to get where they want to go, they’ll have to sign-in.

const isSignedIn = (req, res, next) => {
  // If user is signed in then go to next function (routes functions in server.js). If not then redirect to the sign in page.
  if (req.session.user) return next();
  res.redirect("/auth/sign-in");
};

module.exports = isSignedIn;
