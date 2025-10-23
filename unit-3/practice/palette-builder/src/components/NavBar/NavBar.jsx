import { NavLink } from "react-router";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const pages = [
    { path: "/", name: "Home" },
    { path: "/new", name: "New Palette" },
  ];

  return (
    <nav className={styles.nav}>
      {pages.map((page, idx) => (
        <NavLink
          key={idx}
          to={page.path}
          className={({ isActive }) => (isActive ? styles.active : "")}>
          {page.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
