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

// Exercise #1: Respond to URLs like /greetings/<username-parameter>.
app.get("/greetings/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Welcome ${username}, I am watching you!! 👻`);
});

// Exercise #2: Respond to URLs like /roll/<number-parameter>.
// If parameter is not a number respond with "You must specify a number".
// If a valid number is provided respond with a random whole number between 0 and the provided number.
// Stretch goal: If the number is 6, respond with a special message.
app.get("/roll/:number", (req, res) => {
  // Parse the number from the request parameters.
  const number = Number(req.params.number);

  // Validation guard: Ensures that path param above is an integer and at least 1.
  // !Number.isInteger(number) OR number < 1 is checking if the path param provided is not a number or not a whole number greater than 1. If true then it renders a 400 HTTP status (Bad request) and a message.
  if (!Number.isInteger(number) || number < 1) {
    return res.status(400).send("You must specify a whole number >= 1.");
  }

  // Send a 400 HTTP bad request and message if the path param is a number greater than 6.
  if (number > 6) {
    return res
      .status(400)
      .send("Only a standard 6-sided die is supported (choose 1-6).");
  }

  // Generate a random number between 1 and the provided number.
  const roll = Math.floor(Math.random() * number) + 1;

  // if (number === 6 && roll === 6) {
  //   return res.send("You rolled a 6 on a 6-sided die — critical success! 🎉");
  // }

  res.send(`You rolled a ${roll} on a ${number}-sided die. 🎲`);
});

// Exercise #3: Create a route for URLs like /collectibles/<index-parameter>.
// Create a data array and match routes such as /collectibles/2 or /collectibles/0.
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

// Validation: If the index does not correspond to an item in the array, respond with "This item is not yet in stock. Check back soon!"
// Response: Should describe the item and given index, like "So, you want the shiny ball? For 5.95, it can be yours!" (Include name and price props).
app.get("/collectibles/:index", (req, res) => {
  const index = Number(req.params.index);
  const item = collectibles[index];

  // If not an item or not an index in collectibles array return HTTP Bad Response and message.
  if (!item) {
    return res
      .status(404)
      .send("This item is not yet in stock. Check back soon!");
  }

  res.send(
    `So, you want the ${item.name}? For ${item.price}, it can be yours!`
  );
});

// Exercise #4: Filter shoes by query parameters.
// Use the following array of shoes for this exercise.
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

// Task: Create a route /shoes that filters the list of shoes based on query params.
// Query params are min-price (excludes shoes below this price), max-price (excludes shoes above this price), type (shows only shoes of the specified type), and no params (responds with a full list of shoes).
app.get("/shoes", (req, res) => {
  // Object destructuring to pull query string params off of req.query.
  // Convert to shorthand (minPrice) property names because of the hyphen in the key (aliased).
  const { "min-price": minPrice, "max-price": maxPrice, type } = req.query;

  // Parse and validate numeric query params separately so it happens only once.
  // hasMin and hasMax are booleans that test is the query values are NOT undefined. They check if they are present (presence flags).
  const hasMin = minPrice !== undefined;
  const hasMax = maxPrice !== undefined;
  let numericMin;
  let numericMax;

  // Processes the optional min-price query param. Only if hasMin is true (Param is present and true) it will coerce string to a number and store in numericMin. Anything else produces NaN.
  if (hasMin) {
    numericMin = Number(minPrice);
    // Guard statement catches NaN, Infinity (largest finite number) and -Infinity (Division by 0).
    if (!Number.isFinite(numericMin)) {
      // Returns 404 HTTP Bad Response and message if invalid numeric string.
      return res
        .status(400)
        .send("min-price must be a numeric value (e.g. ?min-price=50)");
    }
  }

  // Same as above, but for max-price.
  if (hasMax) {
    numericMax = Number(maxPrice);
    if (!Number.isFinite(numericMax)) {
      return res
        .status(400)
        .send("max-price must be a numeric value (e.g. ?max-price=300)");
    }
  }

  // If hasMin and hasMax query params are present and numericMin is greater than numericMax then the range is invalid.
  if (hasMin && hasMax && numericMin > numericMax) {
    return res.status(400).send("min-price cannot be greater than max-price");
  }

  // Start with full list and progressively narrow.
  let filteredShoes = shoes;

  // Created filtered array if hasMin is a valid param and present. The filter checks if the shoe's price is greater than or equal to numericMin.
  if (hasMin) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= numericMin);
  }

  // Created filtered array if hasMax is a valid param and present. The filter checks if the shoe's price is less than or equal to numericMax.
  if (hasMax) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= numericMax);
  }

  // Created filtered array if type is a valid param. The filter checks if the shoe's type is equal to the type param.
  if (type) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type);
  }

  res.json(filteredShoes);
});

// Test error states and valid state.
// # Invalid min
// curl 'http://localhost:8090/shoes?min-price=abc'
// # Invalid max
// curl 'http://localhost:8090/shoes?max-price=xyz'
// # Min greater than max
// curl 'http://localhost:8090/shoes?min-price=300&max-price=100'
// # Valid filter
// curl 'http://localhost:8090/shoes?min-price=50&max-price=300&type=sandal'

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
