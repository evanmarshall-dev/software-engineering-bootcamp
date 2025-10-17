const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, required: true },
  breed: String,
});

// - Register the model with Mongoose (Creates a collection called 'pets' in MongoDB).
const Pet = mongoose.model("Pet", petSchema);

// - Export model to use in other files.
module.exports = Pet;
