// NOTES:
// 1. How to expose and API (i.e. Calculator API). Using GET, POST, and DELETE. The operations will be performed on the resource which is the calculator's total.
// GET, POST, and DELETE Methods will all have the route /calculator.
// GET will return current total.
// POST will update total using operations in request body.
// DELETE resets total to 0.

const express = require("express");
const app = express();

// MIDDLEWARE
// Allows us to receive JSON request bodies.
app.use(express.json());

// VARIABLES
let total = 0;

// ROUTES
app.get("/calculator", (req, res) => {
  // GET: Return current total.
  // Give back total value.
  res.json({ total });
});

app.post("/calculator", (req, res) => {
  // POST: Update total using operations in request body.
  const { operation, value } = req.body;

  if (operation === "add") {
    total += value;
  } else if (operation === "subtract") {
    total -= value;
  } else if (operation === "multiply") {
    total *= value;
  } else if (operation === "divide") {
    total /= value;
  }
  res.json({ total });
});

app.delete("/calculator", (req, res) => {
  // DELETE: Reset total to 0.
  total = 0;
  res.json({ total });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
