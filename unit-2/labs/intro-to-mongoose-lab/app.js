require("dotenv").config();
const mongoose = require("mongoose");
const prompt = require("prompt-sync")();
// Import the Customer model
const Customer = require("./models/customer");

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

// 1. Create a new customer
async function createCustomer() {
  const name = prompt("What is the customer's name? ");
  const age = parseInt(prompt("What is the customer's age? "));

  // Guard statement to check for type of number inputted
  // If not a number, return early
  if (isNaN(age)) {
    console.log("Please enter a valid age number.");
    return;
  }

  try {
    // Use the Customer model to create and save a new customer
    // Destructure name and age props from Customer data
    const customer = new Customer({ name, age });
    // Validate and CREATE the customer using save method in Mongoose
    await customer.save();
    console.log(`Customer ${name} created successfully!`);
  } catch (error) {
    console.error("Error creating customer:", error);
  }
}

// 2. View all customers
async function viewAllCustomers() {
  try {
    // READ all customers using the find method in Mongoose
    const customers = await Customer.find();

    // Check if customers were found
    if (customers.length === 0) {
      console.log("No customers found.");
      return;
    }

    // Display customer list
    console.log("\nCustomer List:");
    // Iterate over each customer and display their details
    customers.forEach((customer) => {
      console.log(
        `id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`
      );
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
}

// 3. Update a customer
async function updateCustomer() {
  try {
    // First show all customers
    await viewAllCustomers();

    // READ all customers using the find method in Mongoose
    const customers = await Customer.find();
    // Check if customers were found
    // If not, return early
    if (customers.length === 0) return;

    const customerId = prompt(
      "\nCopy and paste the id of the customer you would like to update here: "
    );

    // Check if customer exists based on ID you entered
    // READ all customers using the findById method in Mongoose
    const customer = await Customer.findById(customerId);
    // If not a valid customer, message user and return
    if (!customer) {
      console.log("Customer not found with that ID.");
      return;
    }

    // If customer exists, prompt for new details
    const newName = prompt("What is the customer's new name? ");
    const newAge = parseInt(prompt("What is the customer's new age? "));

    // Guard statement to check for type of number inputted
    // If not a number, return early
    if (isNaN(newAge)) {
      console.log("Please enter a valid age number.");
      return;
    }

    // UPDATE customer using the findByIdAndUpdate method in Mongoose
    // Update customer props (name and age)
    await Customer.findByIdAndUpdate(customerId, {
      name: newName,
      age: newAge,
    });
    console.log("Customer updated successfully!");
  } catch (error) {
    console.error("Error updating customer:", error);
  }
}

// 4. Delete a customer
async function deleteCustomer() {
  try {
    // First show all customers using the viewAllCustomers function from above
    await viewAllCustomers();

    // READ all customers using the find method in Mongoose
    const customers = await Customer.find();
    // Check if customers were found
    // If not, return early
    if (customers.length === 0) return;

    const customerId = prompt(
      "\nCopy and paste the id of the customer you would like to delete here: "
    );

    // Check if customer exists based on ID you entered
    // READ all customers using the findById method in Mongoose
    const customer = await Customer.findById(customerId);
    if (!customer) {
      console.log("Customer not found with that ID.");
      return;
    }

    // DELETE customer using the findByIdAndDelete method in Mongoose
    await Customer.findByIdAndDelete(customerId);
    console.log("Customer deleted successfully!");
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
}

// Display menu and get user choice
// To be used in the main application loop (runCRM)
function displayMenu() {
  console.log("\nWhat would you like to do?\n");
  console.log("  1. Create a customer");
  console.log("  2. View all customers");
  console.log("  3. Update a customer");
  console.log("  4. Delete a customer");
  console.log("  5. Quit\n");

  return prompt("Number of action to run: ");
}

// Main application loop
async function runCRM() {
  console.log("Welcome to the CRM\n");

  let running = true;

  // While loop which runs while running is true
  while (running) {
    const choice = displayMenu();

    // Switch statements to display the above functions depending on user number choice
    switch (choice) {
      case "1":
        await createCustomer();
        break;
      case "2":
        await viewAllCustomers();
        break;
      case "3":
        await updateCustomer();
        break;
      case "4":
        await deleteCustomer();
        break;
      case "5":
        console.log("Exiting...");
        running = false;
        break;
      default:
        console.log("Invalid choice. Please enter a number between 1-5.");
    }
  }

  // 5. Close database connection
  await mongoose.connection.close();
  console.log("Database connection closed. Goodbye!");
  process.exit(0);
}

// ** Start the application
// First, connect to the database
// Second, run main app loop
async function main() {
  await connectDB();
  await runCRM();
}

// Handle errors and start the app
main().catch((error) => {
  console.error("Application error:", error);
  process.exit(1);
});
