// This file will contain a middleware function that assigns the user information from the session to res.locals. By doing this, we ensure that the user property is available in all templates that are rendered after this middleware has been executed.
// If req.session.user exists (meaning the user is signed in), we assign this value to res.locals.user. If req.session.user is not present (the user isn’t signed in), we set res.locals.user to null.

const passUserToView = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null;
  next();
};

module.exports = passUserToView;
