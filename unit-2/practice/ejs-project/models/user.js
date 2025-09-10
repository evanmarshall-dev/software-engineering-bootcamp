const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  // Linked document to Story collection.
  stories: [{type: mongoose.Schema.Types.ObjectId, ref: "Story"}], // Array of story IDs
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
