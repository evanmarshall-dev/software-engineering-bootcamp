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
