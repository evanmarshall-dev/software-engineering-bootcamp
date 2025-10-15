// NOTES:
// 1. Wrap the <App /> component with <BrowserRouter> in main.tsx to enable routing throughout the app.
// 2. Use <Link> components instead of <a> tags for navigation to prevent full page reloads.
// 3. Define routes using <Routes> and <Route> components to map URLs to components.
// 4. Use the useParams hook to access dynamic route parameters in components.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
