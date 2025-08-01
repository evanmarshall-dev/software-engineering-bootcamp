# Lecture: Intro to Node

## Module: Intro

Node.js (Node) is a JavaScript (JS) runtime environment that enables JS code to be executed outside the browser.

> [!NOTE]
> A runtime environment is where an application (app) runs and provides all needed resources for code in a certain language to execute.

Node is _not_ a programming language. It provides necessary tools to build server side JS apps. This allows developers to utilize JS in both the front-end and back-end.

### Core Features of Node

- Node has built in **libraries** that allow file system interactions, building servers, creating RESTful APIs, and HTTP communication.
- **Cross platform**.
- _Fast_ execution. Uses the same v8 engine that is used in Google Chrome that _compiles_ JS into machine code.
- Large development community with large backers (i.e. Microsoft) as well as an open source library called **Node Package Manager** (npm).

## Module: Executing JS with Node

Nodes runtime for JS is _different_ than that of a browser:

- It does _not_ have access to the browsers DOM or web APIs.
- It has a built in **file system** and **networking** APIs that the browser does not.

**_For example in browser_**: If you type `window` in the browser console you have access to the window object that has methods/properties that allow us to manipulate the webpage content.

There are some built in objects in node that are not accessible within the browser like `fs` (file system module). If we were to type `fs` in the browser console we would receive a reference error (`fs` is not defined) because the browser does _not_ have access to the file system module.

**_For example in node_**: Within the terminal we can start a node **repl (read, evaluate, print, loop)** by typing `node`. If we then type `window` we receive a reference error (window is not defined). This is because browser specific objects are _not_ in node.

This can also be demonstrated when trying to access a DOM element within node (i.e. `document.querySelector('body')`). We would also receive a reference error (document not defined) because there is no DOM.

### Run JS Files from the Terminal

Within `server.js` we will add the following code:

```js
const multiply = (a, b) => a * b;

// Invoke function and store inside variable called product.
const product = multiply(2, 3);

// Log the result of the above operation.
console.log(product);
```

To execute the above code in the terminal we will type `node server.js` and the console log will be displayed in the terminal.

## Module: Built in Node Modules
