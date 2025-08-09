// NOTES:
// EJS: Embedded JavaScript.
// EJS allows you to generate HTML markup with plain JavaScript.
// EJS files have the .ejs extension and can contain plain HTML as well as embedded JavaScript code.

// IMPORTS
const express = require("express");

// CREATE EXPRESS APP
const app = express();

// VARIABLES
const PORT = 8090;

// CREATE SHOW ROUTE
// add the following:
const inventory = [
  { name: "Candle", qty: 4 },
  { name: "Cheese", qty: 10 },
  { name: "Phone", qty: 1 },
  { name: "Tent", qty: 0 },
  { name: "Torch", qty: 5 },
];

// ROUTES
// ? app.get("/", (req, res) => {
//   ? res.send("Hello, EJS!");
// ? });
app.get("/", (req, res) => {
  // Create the data basket.
  const data = {
    message: "EJS page! 🥳",
    showMessage: true,
    // change the following line to:
    inventory: inventory,
  };
  // Now below specifies the ejs template and the data you want to inject.
  // Now you have access to message and showMessage in the home ejs template.
  res.render("home.ejs", data);
});

// ? app.get("/signup", (req, res) => {
//   ? res.send("The signup route has arrived!");
// ? });

app.get("/:itemId", (req, res) => {
  // req.params shows index value of whichever index object is clicked.
  // ? console.log(req.params);
  const index = req.params.itemId;
  // render show.ejs, and pass it a single item object
  res.render("show.ejs", {
    item: inventory[index],
  });
});

// START SERVER
// ? app.listen(3000, () => {
//   ? console.log("Server is running on port 3000");
// ? });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
