// - Import the Pet model from the models directory.
const Pet = require("../models/Pet");
const express = require("express");
const router = express.Router();

// - Base path for router is /pets.

// --------------------------------
// CREATE - POST - /pets
// --------------------------------
router.post("/", async (req, res) => {
  // - Test route.
  // ? res.json({ message: "Create a new pet route" });
  try {
    const createPet = await Pet.create(req.body);
    res.status(201).json(createPet); // 201 status code means "created" and send back the created pet (createPet).
  } catch (err) {
    res.status(500).json({ err: "Failed to create pet" }); // 500 status code means "server error" and send back an object (err) with an error message.
  }
});

// --------------------------------
// INDEX - GET - /pets
// --------------------------------
router.get("/", async (req, res) => {
  // - Test route.
  // ? res.json({ message: "Get all pets route - Index Route" });
  try {
    const foundPets = await Pet.find(); // Find all pets in the database.
    res.status(200).json(foundPets); // 200 status code means "ok" and send back the found pets (foundPets).
  } catch (err) {
    res.status(500).json({ err: "Failed to get pets" }); // 500 status code means "server error" and send back an object (err) with an error message.
  }
});

// --------------------------------
// READ - GET - /pets/:petId
// --------------------------------
router.get("/:petId", async (req, res) => {
  // - Test route.
  // ? res.json({ message: "Get a specific pet route - Read Route" });
  try {
    const foundPet = await Pet.findById(req.params.petId); // Find a pet by its ID (req.params.petId).
    // - Add error handling if a pet is not found
    if (!foundPet) {
      res.status(404);
      // - When you throw an error inside a try block, it will be caught by the catch block.
      throw new Error("Pet not found");
    }
    res.status(200).json(foundPet); // 200 status code means "ok" and send back the found pet (foundPet).
  } catch (err) {
    // - Add error handling code for 404 errors.
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      // - Add else statement to handle all other errors
      res.status(500).json({ err: err.message }); // 500 status code means "server error" and send back an object (err) with an error message.
    }
  }
});

// --------------------------------
// DELETE - DELETE - /pets/:petId
// --------------------------------
router.delete("/:petId", async (req, res) => {
  // - Test route.
  // ? res.json({ message: "Delete a specific pet route - Delete Route" });
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
    if (!deletedPet) {
      res.status(404);
      throw new Error("Pet not found");
    }
    res.status(200).json(deletedPet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});

// --------------------------------
// UPDATE - PUT - /pets/:petId
// --------------------------------
router.put("/:petId", async (req, res) => {
  // - Test route.
  // ? res.json({ message: `Update route with the param ${req.params.petId}` });
  try {
    // - Query the database to find a pet by its ID and update it with the data from req.body.
    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.petId, // The ID of the pet to update.
      req.body, // The updated data for the pet.
      { new: true } // Return the updated pet instead of the old one.
    );
    if (!updatedPet) {
      res.status(404);
      throw new Error("Pet not found");
    }
    res.status(200).json(updatedPet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});

module.exports = router;
