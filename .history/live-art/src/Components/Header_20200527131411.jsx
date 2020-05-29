import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className="header">
      <Link to="/artist_log_in">Artist Log In</Link>
      <h1>
        <Link to="/">Live Art</Link>
      </h1>
      <Link to="/coil_log_in">Supporter Log In</Link>
    </header>
  );
};

export default Header;
