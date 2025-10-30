// To enable navigation and routing in your React application, you need to integrate React Router. This setup allows your application to handle different URLs and display the appropriate content without reloading the page.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // add import for BrowserRouter

// Import the UserProvider component
import { UserProvider } from "./contexts/UserContext.jsx";

import App from "./App.jsx";

import "./index.css";

// Wrap the App component with the BrowserRouter component to enable
// enable route handling throughout your application.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Wrap the UserProvider around the App */}
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
