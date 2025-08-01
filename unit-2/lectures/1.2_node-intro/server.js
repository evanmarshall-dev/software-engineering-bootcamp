// ? const multiply = (a, b) => a * b;

// ? const product = multiply(2, 3);

// ? console.log(product);

const fs = require("fs");

fs.writeFile("./hello.txt", "hello, friend", () => {
  console.log("Done creating file!");
});
