import React from 'react';
import ArtistSignUp from './ArtistSignUp';
import UserLogIn from './UserLogIn';

const Header = () => {
  return (
    <header>
      <ArtistSignUp />
      <h1>Live Art</h1>
      <UserLogIn />
    </header>
  );
};

export default Header;
