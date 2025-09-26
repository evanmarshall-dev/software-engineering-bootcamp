import type { NavbarProps } from "../../types";
import styles from "./Navbar.module.css";

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className={styles.navbar} id='top-navbar'>
      {links.map((link) => (
        <a key={link.id} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
