// To enable navigation and routing in your React application, you need to integrate React Router. This setup allows your application to handle different URLs and display the appropriate content without reloading the page.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // add import for BrowserRouter
import "./index.css";
import App from "./App.jsx";

// Wrap the App component with the BrowserRouter component to enable
// enable route handling throughout your application.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
