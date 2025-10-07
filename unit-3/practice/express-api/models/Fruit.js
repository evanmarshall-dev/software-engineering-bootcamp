const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    ripe: { type: Boolean, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
