import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>
        <Link to="/" className={styles.headerTextLink}>
          Live Art
        </Link>
      </h1>
    </header>
  );
};

export default Header;
