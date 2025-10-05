// NOTES:
// Got to fruits route on browser, this does a GET request by default, and you should see the fruits data in JSON format.

const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const fruits = require("./data/data").fruits;

// Invoke express to create an application object.
const app = express();

// Define a port.
const PORT = process.env.PORT ? process.env.PORT : 5050;

// Server does not know how to parse json data unless we add this middleware.
// This is needed for POST and PUT/PATCH requests.
// It also helps to parse URL-encoded data from forms.
// The extended true allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB.
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Create a fruit.
app.post("/fruits", (req, res) => {
  // const newFruit = {
  //   name: req.body.name,
  //   color: req.body.color,
  //   ripe: req.body.ripe,
  //   price: req.body.price,
  // };

  // OR

  // const newFruit = req.body;

  // OR

  const newFruit = {
    ...req.body,
  };

  // Insert into the array using push.
  fruits.push(newFruit);
  // Respond to the client with res.json for the new fruit.
  res.status(201).json(newFruit);
});

// Route to get all fruits.
app.get("/fruits", (req, res) => {
  res.json(fruits);
});

// Get a single fruit.
// * Make sure after colon matches what you use in req.params (eg. id).
app.get("/fruits/:id", (req, res) => {
  const index = parseInt(req.params.id, 10);
  const fruit = fruits[index];
  if (fruit) {
    return res.json(fruit);
  }
  res.status(404).json({ message: "Fruit not found" });
});

// Update a fruit.
app.put("/fruits/:id", (req, res) => {
  const index = parseInt(req.params.id, 10);
  const fruit = fruits[index];
  if (fruit) {
    const updatedFruit = {
      ...fruit,
      ...req.body,
    };
    fruits[index] = updatedFruit;
    return res.json(updatedFruit);
  }
  res.status(404).json({ message: "Fruit not found" });
});

// Delete a fruit.
app.delete("/fruits/:id", (req, res) => {
  const index = parseInt(req.params.id, 10);
  if (index >= 0 && index < fruits.length) {
    fruits.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ message: "Fruit not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
