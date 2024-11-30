import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Rick & Morty</h2>
          <p className={styles.tagline}>Wubba Lubba Dub Dub!</p>
        </div>
        <nav className={styles.nav}>
          <h3 className={styles.navTitle}>Quick Links</h3>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/Product" className={styles.navLink}>Characters</Link></li>
          </ul>
        </nav>
        <div className={styles.social}>
          <h3 className={styles.socialTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Instagram</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Rick & Morty Fan App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

