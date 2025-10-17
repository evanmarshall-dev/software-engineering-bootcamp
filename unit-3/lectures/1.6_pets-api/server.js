// --------------------------------
// Dependencies
// --------------------------------
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

// --------------------------------
// Import Controllers
// --------------------------------
const petRouter = require("./controllers/pets");

// --------------------------------
// Database Connection
// --------------------------------
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// --------------------------------
// Middleware
// --------------------------------
// ? app.use(cors()); // Enable CORS for all origins (not just your frontend).
app.use(cors({ origin: "http://localhost:5173" })); // Enable CORS for only your frontend if React/Vite is the frontend.
app.use(express.json()); // Parses incoming JSON requests and puts the parsed data in req.body (un-stringifies).
app.use(logger("dev"));

// --------------------------------
// Routes
// - every route in petRouter will be prefixed with /pets.
// --------------------------------
app.use("/pets", petRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
