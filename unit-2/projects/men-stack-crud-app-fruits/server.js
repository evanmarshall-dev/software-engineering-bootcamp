const dotenv = require("dotenv");
dotenv.config(); // Loads the environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Import the Fruit model
const Fruit = require("./models/fruit.js");

// MIDDLEWARE
// This middleware parses incoming request bodies, extracting form data and converting it into a JavaScript object. It then attaches this object to the req.body property of the request, making the form data easily accessible within our route handlers.
// app.use extends the capabilities of the express app.
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

// TEST route to display fruits.
// GET /fruits
// ? app.get("/fruits", (req, res) => {
//   ? res.send("Welcome to the index page!");
// ? });
// retrieve data from the database. In this case, we are looking for all of the fruits. To accomplish this, we’ll use Mongoose’s .find() method. When called without any arguments, .find() retrieves all documents within a collection, returning them as an array.
// Instead of .send(), we will use .render() to respond with a dynamically generated HTML view. The .render() method takes two arguments:
// The first argument is a string specifying the path to the EJS template we wish to render. In our case, it’s ‘fruits/index.ejs’.
// The second argument is an object containing the data we want to pass to the template. This data is provided as key/value pairs, where the key is the name we’ll use to reference the data in our EJS template.
// We’ll pass the allFruits data to our template under the key fruits. This way, our EJS template can use fruits to access and display the data
app.get("/fruits", async (req, res) => {
  // await keyword to wait for .find() to complete its operation and assign the result to the allFruits variable.
  const allFruits = await Fruit.find();
  console.log(allFruits); // log the fruits!
  // ? res.send("Welcome to the index page!");
  res.render("fruits/index.ejs", { fruits: allFruits });
});

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});

// Test route for specific fruit route.
// we need to ensure that any route with an /:id is placed after /new in our express applications.
// ? app.get("/fruits/:fruitId", (req, res) => {
//   ? res.send(
//     ? `This route renders the show page for fruit id: ${req.params.fruitId}!`
//   ? );
// ? });
// We’ll use Mongoose’s .findById() method for fetching a specific fruit by its _id. This method is perfect for retrieving a single document based on its unique identifier.
// req.params.fruitId captures the ID from the URL, and we use it to find the specific fruit. We’ve also made the function async so that we can await the asynchronous database operation.
app.get("/fruits/:fruitId", async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  // ? res.send(
  //   ? `This route renders the show page for fruit id: ${req.params.fruitId}!`
  // ? );
  // After fetching the fruit, we’ll update from res.send() to res.render() to display the show page template. We’ll also pass the retrieved fruit data to the template.
  res.render("fruits/show.ejs", { fruit: foundFruit });
});

// POST /fruits
// Below commented out code is to test with output to terminal.
// ? app.post("/fruits", async (req, res) => {
//   ? console.log(req.body);
//   ? res.redirect("/fruits/new");
// ? });
app.post("/fruits", async (req, res) => {
  // if statement checks the value of req.body.isReadyToEat. This field comes from a checkbox in our form. In web forms, a checked checkbox sends the value "on", while an unchecked checkbox sends no value (thus, it’s undefined). We convert this “on” or undefined value to a Boolean (true or false) to match our schema’s expected data type for isReadyToEat.
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  // Next, we use Fruit.create(req.body) to add a new fruit to our database. req.body contains the form data sent by the user, which now includes our corrected isReadyToEat value. Fruit.create() is an asynchronous operation; we use await to ensure the database operation completes before the function continues.
  await Fruit.create(req.body);
  // We redirect the user back to the form page using res.redirect("/fruits/new"). This solves potential multiple form submissions if the user refreshes the page.
  // ? res.redirect("/fruits/new");
  // Now that we have an index page displaying all our fruits, it’s a good idea to update our create route. Instead of redirecting users back to the form after adding a new fruit, we can redirect them to the index page. This is a better user experience because they can immediately see the result of adding a new fruit to the database.
  res.redirect("/fruits"); // redirect to index fruits
});

// TEST EDIT route.
// GET localhost:3000/fruits/:fruitId/edit
// Since finding a fruit is an asynchronous operation, we use async before our route callback function and await before the findById method. This ensures that the server waits for the fruit to be found before moving to the next line of code.
// ? app.get("/fruits/:fruitId/edit", async (req, res) => {
//   ? const foundFruit = await Fruit.findById(req.params.fruitId);
//   ? console.log(foundFruit);
//   ? res.send(`This is the edit route for ${foundFruit.name}`);
// ? });
app.get("/fruits/:fruitId/edit", async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  // modify our route so that it renders views/fruits/edit.ejs, passing in the foundFruit variable we created.
  res.render("fruits/edit.ejs", {
    fruit: foundFruit,
  });
});

// UPDATE route
app.put("/fruits/:fruitId", async (req, res) => {
  // Handle the 'isReadyToEat' checkbox data
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }

  // Update the fruit in the database
  await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);

  // After updating the fruit in the database, it’s a good practice to redirect the user back to a relevant page. In this case, we redirect the user to the show page of the updated fruit.
  res.redirect(`/fruits/${req.params.fruitId}`);
});

// TEST delete route.
// This route uses app.delete to listen for delete requests. When a delete request is made to /fruits/:fruitId, it will respond with a message saying “This is the delete route”. This step ensures that the delete route is being accessed correctly when the delete button is clicked.
// ? app.delete("/fruits/:fruitId", (req, res) => {
//   ? res.send("This is the delete route");
// ? });
// For this route we’ll use the Mongoose method findByIdAndDelete() to find the fruit by its ID and delete it. Just like the show route, fruit ID is obtained from the URL parameter req.params.fruitId.
app.delete("/fruits/:fruitId", async (req, res) => {
  await Fruit.findByIdAndDelete(req.params.fruitId);
  // After deleting the fruit, we will redirects the user back to the index page /fruits, where the deleted fruit will no longer be listed.
  res.redirect("/fruits");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
