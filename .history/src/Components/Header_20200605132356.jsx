import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.module.css';

const Header = ({ isArtist }) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Live Art</Link>
      </h1>
      {!isArtist && <Link to="/artist-log-in">Artist Log In</Link>}
    </header>
  );
};

export default Header;
