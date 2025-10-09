// NOTES:
// Got to fruits route on browser, this does a GET request by default, and you should see the fruits data in JSON format.
// This will create an API that will provide JSON data for fruits.

// IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// DATA IMPORTS
const fruits = require("./data/data").fruits;

// MODEL IMPORTS
const Fruit = require("./models/Fruit");

// Invoke express to create an application object.
const app = express();

// Define a port.
const PORT = process.env.PORT ? process.env.PORT : 5050;

// Server does not know how to parse json data unless we add this middleware.
// This is needed for POST and PUT/PATCH requests.
// It also helps to parse URL-encoded data from forms.
// The extended true allows for rich objects and arrays to be encoded into the URL-encoded format.
// ? app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB CONNECTION
// Connect to MongoDB.
// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongoose!");
});

// ROUTES
// Create a fruit.
app.post("/fruits", async (req, res) => {
  try {
    // Now we use "create" method from Mongoose model to add to the database.
    const newFruit = await Fruit.create(req.body);
    res.status(201).json(newFruit);
  } catch (err) {
    res.status(400).json("Failed to create a new fruit. See error:", err);
  }
  // const newFruit = {
  //   name: req.body.name,
  //   color: req.body.color,
  //   ripe: req.body.ripe,
  //   price: req.body.price,
  // };

  // OR

  // const newFruit = req.body;

  // OR

  // ? const newFruit = {
  //   ? ...req.body,
  // ? };

  // Insert into the array using push.
  // ? fruits.push(newFruit);
  // Respond to the client with res.json for the new fruit.
  // ? res.status(201).json(newFruit);
});

// Route to get all fruits.
app.get("/fruits", (req, res) => {
  res.json(fruits);
});

// Get a single fruit.
// * Make sure after colon matches what you use in req.params (eg. id).
app.get("/fruits/:id", (req, res) => {
  res.json(fruits[req.params.id]);
});

// Update a fruit.
app.put("/fruits/:id", (req, res) => {
  fruits = fruits.map((fruit, i) => {
    if (i == req.params.id) {
      for (const key in fruit) {
        fruit[key] = req.body[key] ? req.body[key] : fruit[key];
      }
    }
    return fruit;
  });

  res.json(fruits[req.params.id]);
});

// Delete a fruit.
app.delete("/fruits/:id", (req, res) => {
  fruits.splice(req.params.id, 1);
  res.json(fruits);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
