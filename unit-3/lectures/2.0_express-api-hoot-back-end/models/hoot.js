// IMPORT MONGOOSE
const mongoose = require("mongoose");

// DEFINE COMMENT SUBDOCUMENT SCHEMA
// - Add comment schema before hoot schema.
const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

// DEFINE HOOT SCHEMA
const hootSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      // Enum for predefined categories. You cannot create document if not one of these values.
      enum: ["News", "Sports", "Games", "Movies", "Music", "Television"],
    },
    // Reference to the user who created the hoot.
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // Embed comments as an array of comment subdocuments.
    comments: [commentSchema],
  },
  { timestamps: true }
);

// REGISTER HOOT MODEL
const Hoot = mongoose.model("Hoot", hootSchema);

// EXPORT HOOT MODEL
module.exports = Hoot;
