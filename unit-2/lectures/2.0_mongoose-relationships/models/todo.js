const mongoose = require("mongoose"); // Import mongoose to use mongoose.Schema and mongoose.model.

const subTaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
  subTasks: [subTaskSchema], // Now we can have todo have sub tasks. This is an example of embedding.
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
