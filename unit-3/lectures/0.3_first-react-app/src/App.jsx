// -----------------------------
// NOTES:
// - This is the main App component of the React application.
// - What is returned from this component will be rendered to the DOM.
// - This component holds the majority of the logic for the application. Most will be in App, components imported into App, or children of those components.
// FUNCTIONAL COMPONENTS:
// - Component names need to be capitalized in order to work with React.
// - You return JSX inside the App component to display in the UI.
// - In order to use the App component elsewhere in the app (eg. main.jsx) you need to export it just like we would by exporting a function using ES6 modules.
// JSX FUNDAMENTALS:
// - JSX lets us write HTML-like markup inside JS (Combines structure and logic in one file). This can speed up the dev process of building UIs.
// - 1. One difference between JSX and HTML is that any component needs one thing returned just like a function in JS (You can only return one element).
// - This can be solved by wrapping everything in a single parent element or using React Fragments (<> </>). Fragments let you group a list of children without adding extra nodes to the DOM (Therefore, fragments are preferred).
// - 2. Another difference is that self closing tags need to be explicitly closed (eg. <img /> instead of <img>).
// - 3. Also, a main difference is we cannot use JS reserved words as attributes. For example, instead of using "class" we use "className" in JSX.
// - 4. Lastly, JS forbids dashes in variable names, so in JSX we use camelCase for multi-word attributes (eg. onclick becomes onClick).
// -----------------------------
const App = () => {
  return (
    <>
      <h1 className='exampleClass'>My First React App</h1>
      <p>Welcome to my React application!</p>
      <hr />
    </>
  );
};

export default App;
