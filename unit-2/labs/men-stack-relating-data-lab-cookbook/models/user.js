const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  store: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  source: {
    type: String,
  },
  status: {
    type: String,
    enum: ["need", "onList", "have", "outOfStock", "stored"],
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  foods: [foodSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
