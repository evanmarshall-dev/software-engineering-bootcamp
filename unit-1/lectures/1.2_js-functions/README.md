# Lecture: JS Functions

## Module: Concepts

A reusable code block designed to perform a specific task. Breaks _complex_ tasks down into smaller steps. Allows us to _reuse_ code, keeps it DRY, and remove redundancy. Helps with debugging if named properly.

### Function Syntax

A function is made up of the `function` keyword, the **name** of the function, and the **body** (curly braces). The body is made up of **statements** and sometimes a `return` statement. All of these put together is called a function **declaration**.

### Function Naming

Best to name a function that describes the action or **verbs** that the function carries out.

### Function Calls

Defining a function _doesn't_ execute/run/call/invoke it. In order to run the function we need to call it which is adding a parenthesis immediately after the function name.

## Module: Parameters and Arguments

Functions want to take data input. **Parameters** are placeholders for said data added to the function parenthesis. They are basically local variables within a function.

When we assign a value to a parameter (Done by adding to parenthesis when we call a function) we are adding an **argument** to the function. Before calling the function and adding an argument the parameter is `undefined`.

> [!NOTE]
> We can add variables as arguments.

You can add up to 255 different parameters to a function by separating them with commas. The **order** of parameters/arguments matter.

## Module: Return Values

The `return` value is the output of a function. Without it the output would be undefined. Returning the function allows the result of the function to be used later.

When a `return` keyword is used in a function it stops the execution of the function and outputs a `return` value. You want to use the return keyword at the end of the code block, you want to use return with an expression (Without assigning an expression to a return it will output `undefined`).

You can also store the return value of a function within a **variable**.

### Example showing return, reuse, and helper functions

Using return allows us to create **helper functions** that we can reuse the output of to complete complex functions.

```javascript
function compileAndSend() {
  const sales = getSalesData();
  const labor = getLaborCosts();
  const budget = getBudget();
  const report = generateReport(sales, labor, budget);
  sendReport(report);
}

// Run the function
compileAndSend();

/*--- helper functions ---*/

function getSalesData() {
  // code to calculate sales
  return sales;
}

function getLaborCosts() {
  // code to calculate labor costs
  return labor;
}

function getBudget() {
  // code to calculate budget
  return budget;
}

function generateReport(sales, labor, budget) {
  // code to generate report
  return report;
}

function sendReport(report) {
  // code to send the report somewhere
}
```

## Module: Function Expressions

The previously covered function syntax is a **function declaration**. There is another called **function expressions**. Similar to how we declare variables. Since we use a constant we do not assign a name to a function and it is an **anonymous** function. We call a function expression by using the variable name.

### Function Expression Syntax

- `const` keyword.
- Name of `function`.
- Equals to `function` keyword.
- Parenthesis with **parameters**.
- Body of the function made up of statements and usually a `return` statement.

For example:

```javascript
const fullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};

fullName("John", "Doe");
```

## Module: Arrow Functions

Basically the same as a function expression except we _omit_ the `function` keyword and add an arrow between the parameters and the curly braces.

For example:

```javascript
const fullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

fullName("John", "Doe");
```

Arrow functions that use a single expression will auto return without requiring the `return` keyword or curly braces.

For example:

```javascript
const add = (a, b) => {
  return a + b;
};

add(1, 2); // 3

// Can be written as:
const add = (a, b) => a + b;

add(1, 2); // 3

// When working with a single parameter you can omit the parenthesis entirely.
// prettier-ignore
const toThePower = num => num ** 2;

toThePower(2); // 4
```

> [!WARNING]
> Arrow functions aren't ideal for constructors or object methods due to have they handle the `this` keyword.

## Module: Default Parameters

Remember how parameters are undefined until an argument is passed. This behaviour can be mitigated when your code requires an argument whether one is provided or not.

Any expression (i.e. object or functions) can be provided as a default.

For example:

```javascript
const multiply = (num1 = 1, num2 = 1) => {
  return num1 * num2;
};

multiply(2, 3); // 6
multiply(undefined, 3); // 3
multiply(2); // 2
```

## Module: Hoisting

Function expressions/arrow functions cannot be invoked _before_ they are defined.

Function declarations _can_ be **hoisted**, meaning they can be invoked before they are defined.

When JS makes its first pass in the code it will move function declarations to the top of the code.

For example:

```javascript
decSubtract(20, 5); // 15

expSubtract(20, 5); // ReferenceError: Cannot access 'expSubtract' before initialization

function decSubtract(num1, num2) {
  return num1 - num2;
}

const expSubtract = (num1, num2) => {
  return num1 - num2;
};
```

## Module: Rest Parameters

A **rest parameter** takes multiple arguments and condenses them into a single **array**. The syntax is the same as a **spread operator** except that the spread operator _expands_ an array into its elements.

This reduces code by having to write only the spread operator once instead of writing out each argument with the same amount of parameters.

For example:

```javascript
// Only write ...nums once and not 10 different parameters.
function sum(...nums) {
  let total = 0;
  for (let num = 0; i < nums.length; num++) {
    total += nums[num]; // total = total + nums[num];
  }
  return total;
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```

## Module: Immediately Invoked Function Expressions (IIFE)

A function that runs as soon as it is defined instead of traditional functions which require a call.

Requires a **grouping operator** or parenthesis wrapping the entire function and also a parenthesis after the code block.

For example:

```javascript
(() => {
  "use strict";

  // your code here
})();
```

## Module: Nesting Functions

**Nesting** functions allow the creation of **helper** functions to simplify complex tasks within a main function.

This scopes nested functions to the main function and hides them from the rest of the program which they have nothing to do with.

For example:

```javascript
function calculateRectangleProperties(length, width) {
  // Nested helper function to calculate area
  // This function is only accessible within calculateRectangleProperties
  function getArea(l, w) {
    return l * w; // Uses parameters and returns a value
  }

  // Nested helper function to calculate perimeter
  // This function is also scoped to calculateRectangleProperties
  function getPerimeter(l, w) {
    return 2 * (l + w); // Uses parameters and returns a value
  }

  // Call the nested functions
  const area = getArea(length, width);
  const perimeter = getPerimeter(length, width);

  // The main function returns an object containing the results
  // The return value can be stored in a variable and used later
  return {
    area: area,
    perimeter: perimeter,
  };
}

// Call the main function
const properties = calculateRectangleProperties(10, 5);

// You can then use the results:
// console.log("Rectangle Area: " + properties.area); // Output: Rectangle Area: 50
// console.log("Rectangle Perimeter: " + properties.perimeter); // Output: Rectangle Perimeter: 30
```
