const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {type: String, required: true},
  storyText: {type: String, required: true},
  image: {type: String, required: true},
  // Linked document to User collection.
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;