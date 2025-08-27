const mongoose = require("mongoose");

const solarbodySchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  positionFromSun: { type: Number, required: true },
  image: { type: String, required: true },
  isPlanet: { type: Boolean, required: false },
  id: { type: Number, required: true },
});

const SolarBody = mongoose.model("SolarBody", solarbodySchema);
module.exports = SolarBody;
