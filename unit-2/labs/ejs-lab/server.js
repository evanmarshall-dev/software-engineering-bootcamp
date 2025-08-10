// IMPORTS
const express = require("express");

// CREATE EXPRESS APP
const app = express();

// VARIABLES
const PORT = 8090;

// CREATE SHOW ROUTE
const inventory = [
  { name: "Candle", qty: 4 },
  { name: "Cheese", qty: 10 },
  { name: "Phone", qty: 1 },
  { name: "Tent", qty: 0 },
  { name: "Torch", qty: 5 },
];

// ROUTES
app.get("/", (req, res) => {
  const data = {
    message: "EJS page! 🥳",
    showMessage: true,
    inventory: inventory,
  };
  res.render("home.ejs", data);
});

app.get("/:itemId", (req, res) => {
  const index = req.params.itemId;
  res.render("show.ejs", {
    item: inventory[index],
  });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
