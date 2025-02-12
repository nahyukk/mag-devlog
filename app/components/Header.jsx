import React from "react";
import styles from "./Header.module.css";

const Header = ({ title, description }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>
  );
};

export default Header;
