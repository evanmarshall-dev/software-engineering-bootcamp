// NOTES:
// Brings in the dotenv into the code so we can use it.
// dotenv.config pulls int he config.
// require mongoose is the odm which makes process with mongodb easier (Typegoose for working with TypeScript).
// Connect function connects us to the db and run queries then stop (process.exit) db connection (This is for test purposes, not best practice).
// The mongoose.connect uses environment variables to connect to the MongoDB/Atlas cluster.
// Atlas is the most expensive way to run MongoDB but provides a UI for viewing db versus using a different cloud provider.
// The runQueries function will contain the actual database queries we want to perform.
// Mongoose lets us enforce rules on the data with schema. We can change the schema as needed and it will not break which is the benefit to mongoose/mongodb. Also gives typecasting (Assign data types to data).
// Schemas: The schema makes sure the data fits the correct data type. Data types can be string, number, boolean, date, array, objectID (i.e. user ID to link user to comment), buffer (Not common), and mixed data (Not common).
// A model embodies the schema and provides an interface to the database for creating, querying, updating, and deleting documents.
// When we run node queries.js we will have an object Todo created like so:
/*
New todo: {
  text: 'Learn JS',
  isComplete: false,
  _id: new ObjectId('689e7552a6ed34d367036d46'),
  __v: 0
}
*/
// This output shows the newly created todo document. It includes the properties we specified, along with an automatically generated _id (a unique identifier assigned by MongoDB) and __v (a version key used to track how many updates have been made to the document).
// Now from CREATE we will move onto READ. Read will use find() (All documents from a collection), findById() (Single document by ID), and findOne() methods in Mongoose.
// Now for UPDATING Todos we need to have the ID first.
// Retrieve, update, and save() (Method to save into db).
// You can find the ID of a todo by querying the database and retrieving the document you want to update. The ID also shows in the URL of the document in the database.
// We will perform simultaneous retrieval of ID and update.
// find and update takes three arguments: the ID of the document to update, the update data, and options (i.e. { new: true }).
// Output looks like:
/*
Updated todo: {
  _id: new ObjectId('689e7c0970eda7991d1bf1e0'),
  text: 'Learn MongoDB',
  isComplete: true,
  __v: 0
}
*/
// Now onto DELETE. You can also do find and delete.
// There are different querying options you can chain onto the above queries such as sort (sort found data), limit() (limit found data), and skip() (skip found data), and select() selects what data we want back (i.e. only the text).
// Advanced querying you can use regex to find any documents that contain a particular word for example. You can also use logical operators ($and, $or, $not), and comparison operators (i.e. $eq, $gt, $gte, $nin (do not contain a certain value)).
// Implementing MIDDLEWARE.

/*------------------------------- Starter Code -------------------------------*/

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Todo = require("./models/todo"); // Import the Todo model

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries();

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log("Queries running.");
  // The functions calls to run queries in our db will go here as we write them.
  // Call CREATE
  // ? await createTodo();
  // ? await createTodo({ text: "Learn JS", isComplete: false });
  // ? await createTodo({ text: "Learn Mongoose", isComplete: false });
  // ? await createTodo({ text: "Learn MongoDB", isComplete: false });

  // Call FIND
  await findTodos();

  // Call UPDATE
  await updateTodo();

  // Call FIND again for updated list
  await findTodos();

  // Call DELETE
  await deleteTodo();

  // Call FIND again for updated list
  await findTodos();
};

/*------------------------------ Query Functions -----------------------------*/
// CREATE
const createTodo = async (data) => {
  // ? const todoData = {
  //   ? text: "Learn JS",
  //   ? isComplete: false,
  // ? };

  // ? const todo = await Todo.create(todoData);
  const todo = await Todo.create(data);
  console.log("New todo:", todo);
};

// FIND
const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};

// FIND AND UPDATE
const updateTodo = async () => {
  const id = "689e7c0970eda7991d1bf1e0"; // Manually retrieved from Terminal output.
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isComplete: true },
    { new: true }
  );
  console.log("Updated todo:", updatedTodo);
};

// FIND AND DELETE
const deleteTodo = async () => {
  const id = "689e7c0970eda7991d1bf1e0"; // Manually retrieved from Terminal output.
  const removedTodo = await Todo.findByIdAndDelete(id);
  console.log("Removed todo:", removedTodo);
};

// Should be last in this file.
connect();
