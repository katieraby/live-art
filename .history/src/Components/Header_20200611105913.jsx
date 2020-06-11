import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logInText}>
        <button className={styles.artistLogInHereButton}>
          <Link to="/artist-log-in" className={styles.logInLink}>
            Artist Log In
          </Link>
        </button>
      </div>
      <h1 className={styles.headerText}>
        <Link to="/" className={styles.headerTextLink}>
          Live Art
        </Link>
      </h1>
    </header>
  );
};

export default Header;
