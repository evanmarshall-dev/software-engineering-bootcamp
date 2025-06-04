/********************************
  NOTES
*********************************/
// Functions allow us to break up program into smaller blocks of code and modularize it (Breaking a problem down into smaller pieces).
// Functions promote reusability and they give a block of code a name.
// Allows us to write DRY code (Don't repeat yourself).
// Block is the code between two curly braces {}. We have seen them in loops and control flow if statements.
// An expression produces a value and can be written whenever a value is expected.
// IN JS functions are values.

// A newer way to write a function is called an ARROW FUNCTION or FUNCTION EXPRESSION. Above is a FUNCTION DECLARATION which has the keyword function.
// In JS ES6 you can declare them similar to how you declare a variable. Never declare one with let, only const.

// Since functions do things or perform actions the proper way to name them is starting with a VERB.
// Example things functions do are get/retrieve data, set/store data, check something, print stuff (i.e. printScoreBoard()).

// Parameters. Functions often, but not always, take some input and often, but not always, produce some output.
// When you call a function and tell it what the value(s) will be for its parameters you are providing a function its arguments (Passing in an argument).
// These allow us to use the functions in many places and using different values for each function.
// Functions can take multiple args and you can set default params.

// RETURN. Returns allow the function to produce an output value. Also, stops execution of the function immediately (i.e. causes a loop to stop).
// Most common reason to use return is to make a function produce an output value. The output value gets saved to memory and can be used elsewhere in the code.

// SCOPE. A set of rules on how we can access variables and functions based on where it is defined or declared.
// JS scope is lexical, meaning the code's physical structure determines scope.
// Three types: global, block, and function scope.
// Scopes help with readability and reducing side effects/errors (code safety) when a variable is confined to a function for example.

const x = 5; // This is a statement. x is an expression. Some elements can be both expressions and statements.

let y = 1;
let something = y++; // This is a postfix increment operator.
console.log(y); // 2. The value of y before the change.
console.log(something);

let somethingElse = ++y; // This is a prefix increment operator.
console.log(y); // 3. The value of y after the change.
console.log(somethingElse);

/********************************
  DECLARING A FUNCTION
*********************************/
// Function, name of the function, parenthesis, block of code.
function printHello() {
  console.log("I am a function printHello");
  console.log("Hello! Nice to meet you!");
}

// Look at function in the console.
console.log(printHello); // Prints out the function. We just referenced the function name (function definition) and get back the function definition. Nothing was invoked.

// INVOKING/CALLING a function or executing it.
printHello();

// Another example function where we call sayHi that says HI in the console.
// sayHi is just a variable with a value of function.
function sayHi() {
  console.log("HI!");
}

sayHi();

/********************************
  ARROW FUNCTIONS
*********************************/
const printHappyHolidays = () => {
  console.log("\nHappy Holidays!");
};

// Call arrow functions the same way as we call in a function declaration.\
console.log(printHappyHolidays);
printHappyHolidays();

// Write an arrow function called printSum and log results of 10 + 10.
const printSum = () => {
  console.log(10 + 10);
};

printSum();

// Another example. Function printTriangle with nested loop that will print pound signs to the console. There are 5 console logs inside the function. Make it so that printTriangle will print pound signs using a for loop.
// NESTED LOOP SOLUTION.
const printTriangle = () => {
  // Concatenate pound signs to the string by starting with empty string.
  let poundSigns = "";
  // Outer loop handles printing of the line.
  for (let i = 1; i <= 5; i++) {
    // Inner loop handles printing of the pound signs.
    for (let j = 1; j <= i; j++) {
      poundSigns += "#"; // Same as printLine = printLine + "#".
    }
    poundSigns += "\n"; // For new line.
  }
  console.log(poundSigns);
};

printTriangle();

// Another solution with one loop.
const pt2 = () => {
  let line = "";
  for (let i = 1; i <= 5; i++) {
    line += "#"; // line = line + "#".
    console.log(line);
  }
};

pt2();

// Extra challenge. Print the pound symbols with right justification.
// Calculate and prepend spaces for each pound symbol on each line. If max width is 5 characters, for i pound symbols, you need 5 - i spaces.
const ptRight = () => {
  const totalLines = 5;
  for (let i = 1; i <= totalLines; i++) {
    const spaces = " ".repeat(totalLines - i);
    const pounds = "#".repeat(i);
    console.log(spaces + pounds);
  }
};

ptRight();

/********************************
  NAMING A FUNCTION
*********************************/
// f checks input, which should be a string with over 10 chars.
// Every string has a property of length (i.e. coolString.length).
const checkInputLength = (input) => {
  // Two checks: String is over two chars or not.
  if (input.length > 10) {
    console.log("Input length is greater than 10 characters.");
  } else {
    console.log("Input length is less than 10 characters.");
  }
};

checkInputLength("Horse");
checkInputLength("Horse-drawn Carriage");

/********************************
  PARAMETERS/ARGUMENTS
*********************************/
// Function definition with a parameter (i.e. name).
const greet = (name) => {
  // Inside code block you can access the input in "name".
  console.log(`Hello ${name}!`);
  // ? console.log("Hello " + name + "!");
};

// Now we need to specify the value of the param within the parenthesis.
greet("Cletus");

// Another example where we will call several console logs from a function that accepts parameters. Demonstrating reusing function with new arguments as well as different data types for arguments.
const printGreet = (input2) => {
  console.log(input2);
};

printGreet("ANYTHING");
printGreet(null);
printGreet([1, 2, 3, 4, 5]);
printGreet(function () {});
printGreet(-Infinity);
printGreet(6672);

// Another example with a function called minusOne that takes param num. Print argument -1.
function minusOne(num) {
  console.log(num - 1);
}

minusOne(10000);

// Calculate area to demo multi args.
const calculateArea = (height, width) => {
  console.log(`The area is ${height * width}`);
};

calculateArea(10, 55);

// Function called makeSentence and accept three params.
const makeSentence = (word1, word2, word3) => {
  const sentence = word1 + " " + word2 + " " + word3 + " 🥳";
  console.log(sentence);
};

makeSentence("Hello", "party", "people");

/********************************
  RETURN
*********************************/
// Demo: Using return to stop a function with a while loop.
const countToTen = () => {
  let count = 0;
  // while (count < 10) {
  // Below will create an infinite loop if no return generated.
  while (true) {
    console.log(count);
    count++;

    if (count > 10) {
      return;
    }
  }
};

countToTen();

// Example to have return produce an output.
const getTen = () => {
  return 10; // When called, this fxn will output the value of 10.
};

// You can save the output value to a variable.
const ten = getTen();
// ? console.log(getTen());
console.log(ten);

// Another example.
const add2Num = (a, b) => {
  const outputSum = a + b;
  return outputSum;
};

// ? add2Num(13, 14);
// ? console.log(add2Num(13, 14));
// Nothing outputs to console because we are not logging it. The value of the function is saved though.
const sum = add2Num(13, 14);
console.log(sum);

// Write a function getRectArea that takes two params width and length and multiply them and return results. There should be no console log in the function. Check that it works by calling a few different values.
const getRectArea = (width, length) => {
  const area = width * length;
  return area;
};

console.log("getRectArea(10, 11)", getRectArea(10, 11));

// Function that takes 3 params, pass in 3, add them and convert to string.
function getThreeNums(num1, num2, num3) {
  // ? const output = num1.toString() + num2.toString() + num3.toString();
  // Can also be done if we add an empty string before all nums to cause type conversion.
  // ? const output = "" + num1 + num2 + num3;
  // Can also use string interpolation.
  const output = `${num1}${num2}${num3}`;
  return output;
}

console.log("getThreeNums(5, 6, 7)", getThreeNums(5, 6, 7));
console.log("getThreeNums(150, 233, 453)", getThreeNums(150, 233, 453));

// Write a fxn that takes two params (strings) and returns true (boolean) if the two strings are identical.
const checkSameStr = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

console.log(
  'checkSameStr("charlie", "charlie")',
  checkSameStr("charlie", "charlie")
);
console.log(
  'checkSameStr("tomato", "tomahto")',
  checkSameStr("tomato", "tomahto")
);
console.log('checkSameStr("pear", "pair")', checkSameStr("pear", "pair"));
console.log('checkSameStr("", "")', checkSameStr("", ""));
