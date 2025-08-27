// IMPORTS
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// VARIABLES
const port = process.env.PORT ? process.env.PORT : 5000;

// START APP
const app = express();

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// ROUTES
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const solarBodiesRouter = require("./routes/solarBodies");
app.use("/solar-bodies", solarBodiesRouter);

// START SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
