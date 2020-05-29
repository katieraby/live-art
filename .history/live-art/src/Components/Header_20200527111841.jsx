import React from 'react';
import { Link } from '@reach/router';
// import ArtistSignUp from './ArtistSignUp';
// import UserLogIn from './UserLogIn';

const Header = () => {
  return (
    <header>
      <Link to="/artist-log-in">Artist Log In</Link>
      <h1>Live Art</h1>
    </header>
  );
};

export default Header;
