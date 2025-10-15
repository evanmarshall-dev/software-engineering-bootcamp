// NOTES:
// Reference: https://reactrouter.com/start/declarative/navigating#navlink

import { NavLink } from "react-router";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pokemon'
            className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            Pokemon
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pokemon/new'
            className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            New Pokemon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
