// IMPORTS
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require( "cookie-parser" );
const methodOverride = require("method-override");

// IMPORT MODELS
const User = require("./models/user");
const Story = require("./models/story");

// IMPORT ROUTERS
const usersRouter = require("./routes/usersRouter");
const storiesRouter = require("./routes/storiesRouter");
const indexRouter = require("./routes/indexRouter");

// IMPORT ENV VARIABLES
const PORT = process.env.PORT || 8090;

// CREATE EXPRESS APP
const app = express();

app.set("views", "./views"); // Set the views directory.
app.set("view engine", "ejs"); // Set EJS as the templating engine.

// MIDDLEWARE
app.use(express.static("public")); // Serve static files from the public directory.
app.use(express.json({limit: "10mb"})); // Parse any incoming request that has a body of data attached to it.
// Now you will see the request body in console when we submit POST in postman.
app.use(express.urlencoded({limit: "10mb", extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(methodOverride("_method")); // To support PUT and DELETE methods in forms.
app.use(cookieParser()); // To parse cookies from the request headers.

// TODO: AUTH LOCALS MIDDLEWARE HERE

// TODO: CORS MIDDLEWARE HERE

// ROUTES
app.use("/", indexRouter);

// users routes
app.use("/users", usersRouter);

// stories routes
app.use("/stories", storiesRouter);

// START SERVER
(async () => {
  try {
    // Ensure the MongoDB URI is provided (avoid hardcoding secrets)
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is not set in the environment");

    // Connect to MongoDB before starting the server
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    // Exit with a non-zero code so orchestrators know startup failed
    process.exit(1);
  }
})();
