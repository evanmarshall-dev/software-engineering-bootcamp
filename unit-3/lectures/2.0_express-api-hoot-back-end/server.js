const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

// IMPORT ROUTERS
const authRouter = require("./controllers/auth");
const testJwtRouter = require("./controllers/test-jwt");
const usersRouter = require("./controllers/users");
const hootsRouter = require("./controllers/hoots.js");

// CONNECT TO MONGOOSE
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// ROUTES
// - You’ll notice that the authRouter is mounted with a base path of /auth. This means all routes within authRouter will begin with /auth. This includes our sign-up and sign-in routes.
app.use("/auth", authRouter);
app.use("/test-jwt", testJwtRouter);
app.use("/users", usersRouter);
// - We set the base path for our hootsRouter as /hoots. This means that when defining the router above, we only need to specify the path as /. This path will automatically be appended to the base path /hoots defined in server.js.
app.use("/hoots", hootsRouter);

// START SERVER AND LISTEN ON PORT 3000
app.listen(3000, () => {
  console.log("The express app is ready!");
});
