// -----------------------------
// FILE NOTES:
// - This is the main App component of the React application.
// - What is returned from this component will be rendered to the DOM.
// - This component holds the majority of the logic for the application. Most will be in App, components imported into App, or children of those components.
// -----------------------------

// -----------------------------
// FUNCTIONAL COMPONENTS:
// - Component names need to be capitalized in order to work with React.
// - You return JSX inside the App component to display in the UI.
// - In order to use the App component elsewhere in the app (eg. main.jsx) you need to export it just like we would by exporting a function using ES6 modules.
// -----------------------------

// -----------------------------
// JSX FUNDAMENTALS:
// - JSX lets us write HTML-like markup inside JS (Combines structure and logic in one file). This can speed up the dev process of building UIs.
// - 1. One difference between JSX and HTML is that any component needs one thing returned just like a function in JS (You can only return one element).
// - This can be solved by wrapping everything in a single parent element or using React Fragments (<> </>). Fragments let you group a list of children without adding extra nodes to the DOM (Therefore, fragments are preferred).
// - 2. Another difference is that self closing tags need to be explicitly closed (eg. <img /> instead of <img>).
// - 3. Also, a main difference is we cannot use JS reserved words as attributes. For example, instead of using "class" we use "className" in JSX.
// - 4. Lastly, JS forbids dashes in variable names, so in JSX we use camelCase for multi-word attributes (eg. onclick becomes onClick).
// -----------------------------

// -----------------------------
// JS INSIDE JSX:
// - We can embed JS expressions inside JSX using curly braces {}.
// - This allows us to dynamically render content based on variables, function calls, or any valid JS expression.
// - We can also call functions that return values to be rendered inside JSX.
// - Example: We create a todo object and display its properties inside the JSX.
// -----------------------------

// -----------------------------
// CONDITIONAL RENDERING:
// - We cannot use statements like if/else (eg. for/while loops) directly in JSX because they do not return a single value. In an if statement for example, there are multiple possible outcomes and JSX expects a single expression that evaluates to a value.
// - ** Instead, we can use ternary operators or logical && to conditionally render content, which is more concise and readable within JSX.
// -----------------------------

// -----------------------------
// LOOPING/ITERATING IN JSX:
// - We can use the map() function to iterate over arrays and render a list of elements.
// - This is useful for displaying lists of data, such as todo items.
// - A map function takes a callback function that is executed for each item in the array, returning a new array of elements to be rendered.
// - Each element in the list should have a unique "key" prop to help React identify which items have changed, are added, or are removed. This improves performance when rendering lists.
// - You can use other methods that returns an array of transformed items, such as filter() or reduce(), but map() is the most common for rendering lists.
// - Methods like forEach() do not return a new array and therefore cannot be used directly in JSX for rendering lists.
// - When working with map to render a list in the UI, it is common practice to separate the logic to create the list from the JSX that displays it and assign to a variable. This improves code readability and maintainability.
// -----------------------------
const App = () => {
  // ? const todo = { text: "A brand new task", done: true }; // JS object representing a todo item.
  const todo = { text: "A brand new task", done: false };
  // ? console.log(todo); // Log the todo object to the console.

  // Example array of todo items.
  const todos = [
    { text: "Learn HTML", done: true },
    { text: "Learn CSS", done: true },
    { text: "Learn JSX", done: true },
    { text: "Learn React", done: true },
    { text: "Build a React App", done: false },
    { text: "Learn Express", done: false },
    { text: "Deploy the App", done: false },
    { text: "Celebrate Successes", done: true },
  ].map((idx) => ({
    // generate a random id for each todo item. The Math.floor(Math.random()) function generates a random decimal number between 0 and 1, which is then multiplied by 900000 and rounded down to the nearest whole number. Finally, 100000 is added to ensure the id is always 6 digits.
    id: Math.floor(Math.random() * 900000) + 100000,
    ...idx, // spread operator to copy properties from the original object to new object.
  }));
  // ? console.log(todos);

  // Map over the todos array to create list items for each todo.
  const todoListItems = todos.map((todo) => (
    <li key={todo.id}>
      {todo.text} - {todo.done ? "Done" : "Pending"}
    </li>
  ));

  return (
    <>
      <h1 className='exampleClass'>My First React App</h1>
      <p>Welcome to my React application!</p>
      <hr />
      <h2>Todo Item:</h2>
      <p>
        {/* Display todo text. */}
        {todo.text}
      </p>
      <h3>Conditional Rendering in JSX:</h3>
      {/* <p> */}
      {/* {if (todo.done) { */}
      {/* "This task is completed."; */}
      {/* } else { */}
      {/* "This task is pending."; */}
      {/* }} This will cause an error because if statements are not allowed in JSX. */}
      {/* </p> */}
      <p>
        <strong>Task Status:</strong>{" "}
        {/* Display todo status using a ternary operator. If todo.done is truthy display the initial text string and if false display the alternate text string. This returns one of two strings based on the condition so a single expression is returned. */}
        {todo.done ? "This task is completed." : "This task is pending."}
      </p>
      <h3>Looping/Iterating in JSX:</h3>
      {/* Print the list of todo items inside the <ul>. */}
      <ul>{todoListItems}</ul>
    </>
  );
};

export default App;
