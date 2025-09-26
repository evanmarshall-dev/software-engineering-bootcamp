import type { HeaderProps } from "../../types";
import styles from "./Header.module.css";

const Header = ({ title = "Default Title", subtitle }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </header>
  );
};

export default Header;
