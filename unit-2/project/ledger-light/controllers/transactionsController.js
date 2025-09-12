const Transaction = require("../models/transaction");

// List transactions for the current user
exports.index = async (req, res, next) => {
  try {
    const ownerId = req.session.user && req.session.user._id;
    if (!ownerId) return res.redirect("/login");

    const transactions = await Transaction.find({ owner: ownerId }).sort({
      date: -1,
    });
    res.render("transactions/index", { title: "Transactions", transactions });
  } catch (err) {
    next(err);
  }
};

// Show form to create a new transaction
exports.new = (req, res) => {
  res.render("transactions/new", { title: "New Transaction" });
};

// Create transaction (POST)
exports.create = async (req, res, next) => {
  try {
    const ownerId = req.session.user && req.session.user._id;
    if (!ownerId) return res.redirect("/login");

    const { title, amount } = req.body;
    const errors = [];
    if (!title) errors.push("Title is required");
    if (!amount || isNaN(Number(amount)))
      errors.push("Valid amount is required");
    if (errors.length) {
      errors.forEach((e) => req.flash("error", e));
      return res.status(400).render("transactions/new", {
        title: "New Transaction",
        data: req.body,
      });
    }

    const data = { ...req.body, owner: ownerId };
    await Transaction.create(data);
    req.flash("success", "Transaction created");
    res.redirect("/transactions");
  } catch (err) {
    next(err);
  }
};

// Show a single transaction
exports.show = async (req, res, next) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).send("Not found");
    const ownerId = req.session && req.session.user && req.session.user._id;
    if (!ownerId) return res.redirect("/auth/login");
    // guard: tx.owner may be undefined for legacy records
    if (!tx.owner || String(tx.owner) !== String(ownerId))
      return res.status(403).send("Forbidden");
    res.render("transactions/show", { title: "Transaction", transaction: tx });
  } catch (err) {
    next(err);
  }
};

// Edit form
exports.edit = async (req, res, next) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).send("Not found");
    const ownerId = req.session && req.session.user && req.session.user._id;
    if (!ownerId) return res.redirect("/auth/login");
    if (!tx.owner || String(tx.owner) !== String(ownerId))
      return res.status(403).send("Forbidden");
    res.render("transactions/edit", {
      title: "Edit Transaction",
      transaction: tx,
    });
  } catch (err) {
    next(err);
  }
};

// Update (PUT/PATCH)
exports.update = async (req, res, next) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).send("Not found");
    const ownerId = req.session && req.session.user && req.session.user._id;
    if (!ownerId) return res.redirect("/auth/login");
    if (!tx.owner || String(tx.owner) !== String(ownerId))
      return res.status(403).send("Forbidden");

    const { title, amount } = req.body;
    const errors = [];
    if (!title) errors.push("Title is required");
    if (!amount || isNaN(Number(amount)))
      errors.push("Valid amount is required");
    if (errors.length) {
      errors.forEach((e) => req.flash("error", e));
      return res.status(400).render("transactions/edit", {
        title: "Edit Transaction",
        transaction: Object.assign(tx, req.body),
      });
    }

    Object.assign(tx, req.body);
    await tx.save();
    req.flash("success", "Transaction updated");
    res.redirect(`/transactions/${tx._id}`);
  } catch (err) {
    next(err);
  }
};

// Destroy
exports.destroy = async (req, res, next) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).send("Not found");
    const ownerId = req.session && req.session.user && req.session.user._id;
    if (!ownerId) return res.redirect("/auth/login");
    if (!tx.owner || String(tx.owner) !== String(ownerId))
      return res.status(403).send("Forbidden");
    await tx.deleteOne();
    req.flash("success", "Transaction deleted");
    res.redirect("/transactions");
  } catch (err) {
    next(err);
  }
};
