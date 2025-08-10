// NOTES:
// Asynchronous programming allows for non-blocking code execution, enabling better performance and responsiveness in applications.
// It is achieved through callbacks, promises, and async/await syntax.
// The callback (cb) function is what we want to run as soon as the asynchronous task is complete (i.e. fetching completes).

// fs is Node's built in file system module that allows our app to interact with the file system.
// ? const fs = require("node:fs");
// For async/await we need to import promised based variant of Node's fs.
const fs = require("node:fs/promises");

// The readFile() method reads from the file specified (i.e. text.txt) using the UTF-8 character set. The content of the file will be available to the cb function's data param.
// The cb function is (err, data) => {}.
// The readFile() method is asynchronous, meaning it will not block the execution of the code that follows it.
fs.readFile("test.txt", "utf8", (err, data) => {
  // Data is the data in test.txt file and will show in the terminal.
  console.log("#1. Run this code first: ", data);
});

// This will show in the terminal.
console.log("#2. Run this as soon as possible!");
console.log("#3. Also run this code as soon as possible!");

// Demo multiple nested async functions.
fs.readFile("test.txt", "utf8", (err2, data2) => {
  console.log("#4. Run this code after #1: ", data2);
  fs.readFile("test2.txt", "utf8", (err3, data3) => {
    console.log("#5. Run this code after #4: ", data3);
    fs.readFile("test3.txt", "utf8", (err4, data4) => {
      console.log("#6. Run this code after #5: ", data4);
      console.log("#7. This is the end of the nested async calls.");
    });
  });
});

console.log("#8: This code should run prior to async code.");

// When async keyword is used when defining a function it allows us to wait for the async operation to complete before executing more code in said function.
// Using await pauses the execution of the rest of the code in a function until async operation completes and it can only be used inside an async function.

// Async/Await demo
const readDataFiles = async () => {
  // With await and fs.readFile directly returns the file contents as a string so we can assign it to variables without the need of callback functions.
  // Avoids cb hell, by using await we avoid nesting code that looks like a series of synchronous operations.
  const data5 = await fs.readFile("test.txt", "utf8");
  console.log(data5);
  const data6 = await fs.readFile("test2.txt", "utf8");
  console.log(data6);
  const data7 = await fs.readFile("test3.txt", "utf8");
  console.log(data7);
};

readDataFiles();

console.log("#9: Run this code as soon as possible.");

// Another demo with try/catch and Promise.all
const rabbit = { name: "Bugs Bunny", species: "Rabbit" };
const badger = { name: "Boomer Badger", species: "Mammal", hasRoots: false };
const bear = { name: "Butch the Bear", species: "Mammal", hasSalmon: false };

// Bear task.
const catchSalmon = async () => {
  // Your best case scenario should happen in the try block.
  try {
    console.log(
      `🐟 ${bear.name} is fishing for salmon... This may take a while...`
    );
    await delay(2000); // Simulates a delay.
  } catch (error) {}
};
