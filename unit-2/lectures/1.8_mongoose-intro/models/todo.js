const mongoose = require("mongoose");

// Any todo we create has to have text that is a STRING and is complete has to be a BOOLEAN.
const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

// MIDDLEWARE
// Capitalizes text saved to the database.
todoSchema.pre("save", function (next) {
  const docToBeSaved = this;
  if (docToBeSaved.text) {
    docToBeSaved.text =
      docToBeSaved.text[0].toUpperCase() + docToBeSaved.text.slice(1);
  }
  next();
});

// Now we compile the todoSchema into a model called Todo.
// The name Todo is important and will be pluralized to Todos in db.
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

// Now we are going to USE the model and use the CREATE method that comes with models.
// The model is going to be connected to a collection called Todos in db.
// Import Todo into queries.js (Models should be capitalized).
// Add createTodo function inside queries.js.
