const bcrypt = require("bcrypt");
const User = require("../models/user");
const { login, logout } = require("../middleware/auth");

exports.showRegister = (req, res) => {
  res.render("auth/register", { title: "Register" });
};

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const errors = [];
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (errors.length) {
      errors.forEach((e) => req.flash("error", e));
      return res
        .status(400)
        .render("auth/register", { title: "Register", email });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      req.flash("error", "Email already registered");
      return res.status(400).render("auth/register", { title: "Register" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ email, passwordHash });
    // login the user by attaching to session
    req.flash("success", "Account created — you are now signed in");
    login(req, user);
    res.redirect("/transactions");
  } catch (err) {
    next(err);
  }
};

exports.showLogin = (req, res) => {
  res.render("auth/login", { title: "Login" });
};

exports.loginPost = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const errors = [];
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (errors.length) {
      errors.forEach((e) => req.flash("error", e));
      return res.status(400).render("auth/login", { title: "Login", email });
    }
    const user = await User.findOne({ email });
    if (!user) {
      req.flash("error", "Invalid email or password");
      return res.status(400).render("auth/login", { title: "Login" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      req.flash("error", "Invalid email or password");
      return res.status(400).render("auth/login", { title: "Login" });
    }

    // Regenerate session to prevent fixation
    req.session.regenerate((err) => {
      if (err) return next(err);
      login(req, user);
      req.flash("success", "Welcome back");
      res.redirect("/transactions");
    });
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res) => {
  logout(req);
  req.flash("success", "You have been logged out");
  res.redirect("/");
};
