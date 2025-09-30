import { useState } from "react";
import "./App.css";

const App = () => {
  // Union Types for Limited String Values.
  // Instead of allowing any string for your mode state, use a union type to restrict valid values:
  type Mode = "light" | "dark" | "neon" | "night";

  // Define Cat interface for type safety
  interface Cat {
    name: string;
    breed: string;
  }

  // ? const [isDarkMode, setIsDarkMode] = useState(false);
  // In the previous lesson, we toggled between light and dark modes using a boolean state. However, real-world applications often require more versatile state management. Let’s refactor our component to use a string-based state accommodating multiple modes or themes.
  // ? const [mode, setMode] = useState("light");
  const [mode, setMode] = useState<Mode>("light");

  // ? const handleDarkMode = () => {
  //   ? console.log("Dark Mode!");
  //   ? setIsDarkMode(true);
  // ? };

  // ? const handleLightMode = () => {
  //   ? console.log("Light Mode!");
  //   ? setIsDarkMode(false);
  // ? };

  // We can also make our code easier to manage and use a single handler function to set state. Instead of setting the state to true or false, it will now set the mode state to a passed in modeValue string:
  // The refactored handleMode() function can handle any mode string passed to it. This versatility makes it easy to add new modes without modifying the function’s logic. You can call handleMode('light'), handleMode('night'), or any other mode string, and the function will work seamlessly.
  // As new modes are introduced, you don’t need to revisit this function to make updates, making it more maintainable.
  // The function assumes that the passed string is a valid mode. If an invalid string is passed, it might lead to unexpected behaviors or a broken UI. For example, if handleMode('unknown') is called, the app might apply a non-existent CSS class.
  // Depending on how complex this state becomes, it may be necessary to add validation logic to ensure the passed-in string has a corresponding CSS class before using it to set state.
  // ? const handleMode = (modeValue) => {
  //   ? console.log(modeValue);
  //   ? setMode(modeValue);
  // ? };
  const handleMode = (modeValue: Mode) => {
    console.log(modeValue);
    setMode(modeValue);
  };

  // More Complex State Management.
  const [cats, setCats] = useState<Cat[]>([
    { name: "Myshka", breed: "Ragdoll" },
    { name: "Malta", breed: "Turkish Angora" },
  ]);

  // ? const addCat = (newCat) => {
  // spread current cats array and newCat object into a new array
  // ? const newCatsArray = [...cats, newCat];
  // call state setter function with this new array
  // ? setCats(newCatsArray);
  // ? };
  // CAN ALSO BE WRITTEN AS:
  const addCat = (newCat: Cat) => {
    setCats([...cats, newCat]);
  };

  return (
    <>
      {/* <div className={isDarkMode ? "dark" : "light"}> */}
      <div className={mode}>
        <h1>Hello world!</h1>
      </div>
      <div>
        {/* <button onClick={handleDarkMode}>Dark Mode</button> */}
        {/* <button onClick={handleLightMode}>Light Mode</button> */}
        {/* Normally, when you use onClick={handleMode}, you’re telling React to call the handleMode() function when the event occurs. However, if you need to pass an argument to handleMode(), like 'dark' or 'light', you can’t just write onClick={handleMode('dark')}. This would call the function immediately when the component renders, not when the button is clicked.
        To ensure that handleMode() is called with an argument only after the click event, we wrap it inside an anonymous function. The arrow function () => doesn’t execute right away; it only runs when the button is clicked. */}
        <button onClick={() => handleMode("dark")}>Dark Mode</button>
        <button onClick={() => handleMode("light")}>Light Mode</button>
        <button onClick={() => handleMode("neon")}>Neon Mode</button>
        <button onClick={() => handleMode("night")}>Night Mode</button>
      </div>

      <button onClick={() => addCat({ name: "Kira", breed: "Ragamuffin" })}>
        Add Kira the Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

export default App;
