// NOTES:
// Listening on port 3000.
// Event listener is for get request at root dir.
// Response is sending back Hello World.

// Import Express.
const express = require("express");

// Create an Express app.
// This provides the Express app object from express to allow us to listen to HTTP server verbs and actions.
const app = express();

// Get request. Routes.
// Express looks through all potential routes for matching root route on port 3000 then you run code in cb function.
app.get("/", (req, res) => {
  // This displays in browser.
  // Responding with hello world when get request is at root path.
  res.send("Hello World!");
});

// Static url path.
// This would fall under the :username path so in order to fix you need to place this before the dynamic path in the code.
app.get("/home", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Page</h2>");
});

// Using query param.
// You setup with key value after ? symbol.
app.get("/hello", (req, res) => {
  // Using req.query instead of req.params.
  const name = req.query.name;
  const age = req.query.age;

  // Using the query parameters to customize the response
  res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
});
// Type in localhost:3000/hello?name=Evan&age=38

// URL Params.
// The colon before username is to let us know that it is a variable and dynamic.
app.get("/:username", (req, res) => {
  const username = req.params.username;
  // To see the typed in username inside terminal.
  console.log(username);

  // Now when we go to the dynamic URL path (replace username with anything) then we will return response of Hello whatever username you type in URL.
  res.send(`Hello ${username}!`);
});

// Have dynamic route in subfolder.
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}!`);
});

// Could also listen for numbers instead of a username.
// Go to localhost:3000/1/5
app.get("/:num1/:num2", (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // Test for NaN by seeing if it is equal to itself.
  // If equal to itself then it is a number otherwise it is not a number.
  if (num1 !== num1) {
    return res.send("Invalid number");
  } else if (num2 !== num2) {
    return res.send("Invalid number");
  }
  res.send(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
});

// Listen for requests on port 3000.
// This log shows in terminal NOT browser console because code is running in the terminal.
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
