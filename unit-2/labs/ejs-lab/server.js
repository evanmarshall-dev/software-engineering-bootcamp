// IMPORTS
const express = require("express");

// IMPORT ROUTERS
// const usersRouter = require("./routes/usersRouter");
// const storiesRouter = require("./routes/storiesRouter");
const indexRouter = require("./routes/indexRouter");
const menuRouter = require("./routes/menuRouter");
const menuCategoryRouter = require("./routes/menuCategoryRouter");

// IMPORT ENV VARIABLES
const PORT = process.env.PORT || 8090;

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE

// DATA
const RESTAURANT = require("./data/restaurant");

// Make RESTAURANT available to all routes as a local
app.use((req, res, next) => {
  res.locals.RESTAURANT = RESTAURANT;
  next();
});

// ROUTES
app.use("/", indexRouter);

// users routes
// app.use("/users", usersRouter);

// stories routes
// app.use("/stories", storiesRouter);

// menu routes
app.use("/menu", menuRouter);

// menu category routes
app.use("/menu", menuCategoryRouter);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
