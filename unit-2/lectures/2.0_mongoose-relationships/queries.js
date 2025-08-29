/*------------------------------ Notes -------------------------------------*/

// This code establishes a connection to MongoDB and provides two functions to create and read todo resources in our database.

/*------------------------------ Starter Code ------------------------------*/

const dotenv = require("dotenv"); // Import and configure dotenv package. Configures what we want to add to our environment (i.e. database connection).
dotenv.config(); // The config function loads environment variables from .env file. Takes key:value from .env and injects into process.env.

const mongoose = require("mongoose"); // Import mongoose to connect to the database with mongoose.connect.
const Todo = require("./models/todo.js"); // Required model for creating todos.

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI); // Connect to MongoDB using the URI from .env.
  console.log("Connected to MongoDB");
  await runQueries(); // Execute the query functions.

  await mongoose.disconnect(); // Disconnect from the database.
  console.log("Disconnected from MongoDB");
  process.exit(); // Exit the process. Similar to CTRL + C inside the terminal.
};

connect(); // Call the above function to connect to db and run queries.

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: "learn React",
    isComplete: false,
  }; // Create a new todo object.
  const todo = await Todo.create(todoData); // Create a new todo in the database.
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.find({}); // Find all todos in the database.
  console.log("All todos:", todos);
};

const createSubtask = async () => {
  const todoId = "68b0ea6e76fe3fde543cd971"; // Replace with an actual todo ID from your database.
  const todo = await Todo.findById(todoId); // Find a todo by its ID.

  const subtaskData = {
    text: "Learn how props work",
    isComplete: false,
  }; // Create a new subtask object.

  todo.subTasks.push(subtaskData); // Add the subtask to the todo's subTasks array. The subTasks comes from the todo schema in todo.js model.
  // * Add to set is a good alt to push because it won't allow duplicates.
  const saveTodo = await todo.save(); // Save the modified todo.
  console.log("Saved todo:", saveTodo);
  console.log("Modified todo:", todo);
};

const findAndCompleteSubtask = async () => {
  const todoId = "68b0ea6e76fe3fde543cd971"; // Replace with an actual todo ID from your database.
  const subtaskId = "68b0f2f718e4edff55e9bc60"; // Replace with an actual subtask ID from your database.

  const todo = await Todo.findById(todoId); // Find the todo by its ID.
  console.log("Todo before changes:", todo);
  const subtask = todo.subTasks.id(subtaskId); // Mongoose provides a method to find a sub-document by its ID.
  subtask.isComplete = true; // Mark the subtask as complete.
  const savedTodo = await todo.save(); // Save the modified todo.

  console.log("Sub-document updated:", subtask);
  console.log("Updated todo:", savedTodo);
};

const removeSubtask = async () => {
  const todoId = "68b0ea6e76fe3fde543cd971";
  const subtaskId = "68b0f2f718e4edff55e9bc60";

  const todo = await Todo.findById(todoId); // Find the todo by its ID.
  todo.subTasks.pull(subtaskId); // Remove the subtask from the todo's subTasks array.
  await todo.save(); // Save the modified todo.

  console.log("Updated document:", todo);
};

const findParentAndRemoveSubtask = async () => {
  const foundTodo = await Todo.findOne({
    "subTasks.text": "Learn how props work",
  }); // Find the parent todo by subtask property.

  const foundSubtask = foundTodo.subTasks.find((subtask) => {
    return subtask.text === "Learn how props work";
  }); // Find the subtask by its text.

  foundSubtask.deleteOne(); // Remove the subtask from the database.

  await foundTodo.save(); // Save the modified todo.
  console.log("Updated todo:", foundTodo);
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log("Queries running.");
  // ? await createTodo(); // Create a new todo.
  // ? await createSubtask(); // Create a new subtask.
  // ? await findAndCompleteSubtask(); // Find a subtask and mark it complete.
  // ? await findTodos(); // Find all todos.
  // ? await removeSubtask(); // Remove a subtask.
  // ? await findParentAndRemoveSubtask(); // Find a parent todo by subtask property and remove the subtask.
};
