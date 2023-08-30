import React from "react";
import Logo from "../logo/Logo";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.menuWrapper}>
        <p>Home</p>
        <p>Attroneys</p>
        <p>Practice areas</p>
        <p>About us</p>
      </div>
      <button className={styles.button}>Contact Us</button>
    </nav>
  );
};

export default NavBar;
