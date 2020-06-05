import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className="header">
      <Link to="/artist-log-in">Artist Log In</Link>
      <h1>
        <Link to="/">Live Art</Link>
      </h1>
    </header>
  );
};

export default Header;
