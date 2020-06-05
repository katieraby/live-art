import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.module.css';

const Header = ({ isArtist }) => {
  return (
    <header className="header">
      {!isArtist && <Link to="/artist-log-in">Artist Log In</Link>}
      <h1>
        <Link to="/">Live Art</Link>
      </h1>
    </header>
  );
};

export default Header;
