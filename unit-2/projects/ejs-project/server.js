// IMPORTS
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// IMPORT ROUTERS
const usersRouter = require("./routes/usersRouter");
const storiesRouter = require("./routes/storiesRouter");
const indexRouter = require("./routes/indexRouter");

// IMPORT ENV VARIABLES
const PORT = process.env.PORT || 8090;

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse any incoming request that has a body of data attached to it.
// Now you will see the request body in console when we submit POST in postman.

// DATA

// ROUTES
app.use("/", indexRouter);

// users routes
app.use("/users", usersRouter);

// stories routes
app.use("/stories", storiesRouter);

// START SERVER
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
});
