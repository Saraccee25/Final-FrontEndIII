import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Rick & Morty</div>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <Link to="/" className={styles.link} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/contact" className={styles.link} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link to="/product" className={styles.link} onClick={() => setIsOpen(false)}>
          Product
        </Link>
        <Link to="/favorites" className={styles.link} onClick={() => setIsOpen(false)}>
          Favorites 
        </Link>
      </div>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
