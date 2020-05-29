import React, { useState } from 'react';
import ArtistSignUp from './ArtistSignUp';
import { Link } from '@reach/router';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInDetails, setLogInDetails] = useState({
    username: '',
    password: '',
  });

  //this will be put into context as an array of artists to gather a list of logged in artists to create homepage list of live art available - currently just hardcoding like this to get all pages connected first
  const [artist, setArtist] = useState({
    username: '',
    aboutMe: '',
    artist_id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInDetails, 'apirequest');
    //api get request
    setArtist({
      username: 'bainesface',
      aboutMe: 'I like coding and ceramics and plants',
      artist_id: 10,
    });
    console.log(artist);
    setLogInDetails({ username: '', password: '' });
  };

  return (
    <div>
      {hasAccount ? (
        <div>
          <form className="artistLogInForm" onSubmit={handleSubmit}>
            <label className="artistLogInLabel">Artist Log In</label>
            <input
              className="artistLogInUsername"
              placeholder="username"
              type="text"
              value={logInDetails.username}
              required
              onChange={(e) =>
                setLogInDetails({ ...logInDetails, username: e.target.value })
              }
            />
            <input
              className="artistLogInPassword"
              placeholder="password"
              type="password"
              value={logInDetails.password}
              required
              onChange={(e) =>
                setLogInDetails({ ...logInDetails, password: e.target.value })
              }
            />
            <button>Log In</button>
          </form>
          <button
            onClick={() => {
              setHasAccount(false);
            }}
          >
            Need an account? Sign Up here
          </button>
        </div>
      ) : (
        <ArtistSignUp setHasAccount={setHasAccount} />
      )}
    </div>
  );
};

export default ArtistLogIn;
