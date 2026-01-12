import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>ShopStore</Link>
      <ul className={styles.links}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/cart" className={styles.link}>Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
