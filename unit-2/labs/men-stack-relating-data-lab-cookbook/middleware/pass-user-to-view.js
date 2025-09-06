// NOTES:
// Inside of the pass-user-to-view.js file, we will add the following logic to add the user to the res.locals object.
// In the above code, we use a ternary operator specifying that if a user exists (in req.session.user) then set the value of res.locals.user to that user. Otherwise, we will set the value of res.locals.user to null. next() then calls the next function in our route handling sequence.
// This middleware provides us a shortcut to always pass the information of the logged in user to our requests final destination.

const passUserToView = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null;
  next();
};

module.exports = passUserToView;
