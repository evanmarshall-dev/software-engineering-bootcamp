# Lecture: JavaScript Scopes

## Module: Concepts

A set of rules for accessing functions/variables. JS scope is **lexical**, which means the code's structure determines scope.

The main creator of scope are the curly braces. Types of scope are:

1. Global Scope
2. Function Scope
3. Block Scope

Controlling what and where code has access to a variable is important because:

1. Variable Isolation
2. Code Readability
3. Memory Efficient

## Module: Function & Block Scope

- **Function Scope**: When you declare a variable within a function it can only be accessed within that function (Including function parameters).
- **Block Scope**: If you declare a variable inside a code block (i.e. `if` statement or `for` loop including variables defined within curly braces) you can only access said variable within that block.

For example:

```js
// Global Scope.
const globNum = 22;

const addNums = (numA) => {
  // Function Scope.
  const numB = 5;
  console.log(numA + numB); // 10
};
addNums(5);

console.log(numB); // ReferenceError: numB is not defined.
console.log(numA); // ReferenceError: numA is not defined.
console.log(globNum); // 22
```

> [!NOTE]
> When using the old variable keyword (`var`) block scope is _not_ recognized. The `var` keyword is not usually used anymore.

Variables within function scope only exist while the function executes unless the function creates a **closure**.

## Module: Global Scope

Global variables are available _anywhere_ in the codebase. This makes them powerful, but less safe.

### The Window Object

Represents the global scope within the **browser**. It is usually _bad practice_ to write variables in global scope because they can overright data in JS frameworks/libraries as well as overright the window object and some of it's properties.

Creating a lot of global scope is called **polluting** the global scope.

When we define a variable in global scope it becomes a property in the window object.

> [!NOTE]
> The `let` and `const` keywords do **not** create properties on the `window` object as `var` **does**.

## Module: The Scope Chain

The **mechanism** that allows JS to find variables and functions you have defined.

How it works:

1. JS looks at the innermost scope.
2. Works its way out.
3. Not found causes reference error.

For example:

```js
// 2. friendName var not found within function scope so JS checks global scope.
let friendName = "Burt";

const greet = () => {
  // 1. JS will check for friendName var within function scope.
  let message = `Hello, ${friendName}`; // 3. friendName var found now insert it within message.
  console.log(message);
};

console.log(message); // Error because JS cannot go inside innermost scope from outermost scope.
greet();
```

The above example shows that JS goes from innermost scope to outermost scope (_drilling_ up), but not from outermost scope to innermost scope (_drilling_ down).
