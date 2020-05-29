import React from 'react';
import { Link } from '@reach/router';
// import ArtistSignUp from './ArtistSignUp';
// import UserLogIn from './UserLogIn';

const Header = () => {
  return (
    <header className="header">
      <Link to="/artist-log-in">Artist Log In</Link>
      <h1>Live Art</h1>
      <Link to="/coil-log-in">Supporter Log In</Link>
    </header>
  );
};

export default Header;
