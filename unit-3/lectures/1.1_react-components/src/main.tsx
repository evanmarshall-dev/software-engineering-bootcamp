import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import type { NavLink } from "./types";

const navigationLinks: NavLink[] = [
  { label: "Home", href: "/", id: 1 },
  { label: "About Us", href: "/about-us", id: 2 },
  { label: "Investment Opportunities", href: "/money-pit", id: 3 },
  { label: "Terms of Service", href: "/the-fine-print", id: 4 },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Navbar links={navigationLinks} />
      <main>
        <App />
      </main>
    </>
  </StrictMode>
);
