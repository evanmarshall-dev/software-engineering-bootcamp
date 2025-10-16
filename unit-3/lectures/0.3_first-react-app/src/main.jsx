// -----------------------------
// NOTES:
// - This is the entry point for the React application.
// - We pass into createRoot() the DOM element with id "root". This element is found in the index.html file. This element represents the root DOM node where our React application will be mounted. React will manage everything inside this element.
// - Now that the root element is determined we can render components inside it using the render() method.
// - The main component being rendered is the App component which is imported from the App.jsx file.
// -----------------------------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
