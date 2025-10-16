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
            to='/mailboxes'
            className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            Mailboxes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/new-mailbox'
            className={({ isActive }) => (isActive ? styles.activeLink : "")}>
            New Mailbox
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
