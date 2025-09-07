const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema); // create model, capitalize model name (Fruit).

module.exports = Fruit;
