// NOTES:
// Got to fruits route on browser, this does a GET request by default, and you should see the fruits data in JSON format.
// This will create an API that will provide JSON data for fruits.

// IMPORTS
require("dotenv").config();
const express = require("express");
require("dotenv").config();
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
app.use(express.urlencoded({ extended: true }));

// DB CONNECTION
// Connect to MongoDB.
(async function start() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      // optional: use recommended options if needed
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Start the server after successful DB connection.
    // NOTE: remove or avoid the duplicate app.listen at the bottom of the file.
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Exit so the process doesn't run in a broken state
    process.exit(1);
  }
})();

// ROUTES
// Create a fruit.
app.post("/fruits", async (req, res) => {
  try {
    // Now we use "create" method from Mongoose model to add to the database.
    const newFruit = await Fruit.create(req.body);
    res.status(201).json(newFruit);
  } catch (error) {
    res.status(400).json("Failed to create a new fruit. See error:", error);
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
  const index = Number(req.params.id);
  const fruit = fruits[index];
  if (fruit) {
    return res.json(fruit);
  }
  res.status(404).json({ message: "Fruit not found" });
});

// Update a fruit.
app.put("/fruits/:id", (req, res) => {
  const index = Number(req.params.id);
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
  const index = Number(req.params.id);
  if (index >= 0 && index < fruits.length) {
    fruits.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ message: "Fruit not found" });
});

// Start the server
// ? app.listen(PORT, () => {
//   ? console.log(`Server is running on http://localhost:${PORT}`);
// ? });
