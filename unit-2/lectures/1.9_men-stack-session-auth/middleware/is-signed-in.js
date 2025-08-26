// When writing a custom middleware function, recall that we want three parameters instead of the usual two parameters our route handlers have been using:
// req is the request object, res is the response object, next is the third parameter, representing the next function in the long line of middleware and route handlers that a request is processed through.
// Unlike endpoint handlers, which typically use the response object res to send data back to the user, middleware functions are designed to perform a task and then proceed to the next step in the request-response cycle. This is achieved by calling the next() callback function.

// This function checks if req.session.user exists, and if it does, it allows the request to continue on the normal chain by invoking next() and returning. If this check fails, however, it moves to redirect the user to the sign-in page, strongly suggesting to the user that, to get where they want to go, they’ll have to sign in.
// An extreme bonus challenge for you might be to use session, or query parameters, to store the URL they were trying to get to, and changing the sign-in flow to redirect them back to that route once they’ve finished signing in. You may have seen this in URL bar of many real world applications: ?redirectURL=profile.

const isSignedIn = (req, res, next) => {
  if (req.session.user) return next();
  res.redirect("/auth/sign-in");
};

module.exports = isSignedIn;
