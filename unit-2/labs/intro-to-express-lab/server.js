// IMPORTS
const express = require("express");

// CREATE EXPRESS APP
const app = express();

// VARIABLES
const PORT = 8090;

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, EJS!");
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
