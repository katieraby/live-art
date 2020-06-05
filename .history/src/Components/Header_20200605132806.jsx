import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.module.css';

const Header = ({ isArtist }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>
        <Link to="/">Live Art</Link>
      </h1>
      {!isArtist && (
        <div className={styles.logInLink}>
          <Link to="/artist-log-in">Artist Log In</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
