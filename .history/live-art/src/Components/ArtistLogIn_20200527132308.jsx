import React, { useState } from 'react';
import ArtistSignUp from './ArtistSignUp';
import { Link } from '@reach/router';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInDetails, setLogInDetails] = useState({
    username: '',
    password: '',
  });

  //this will be put into context to gather a list of logged in artists to create homepage list of live art available
  const [artists, setArtists] = useState([
    {
      username: 'bainesface',
      aboutMe: 'I like coding and ceramics',
      artist_id: 10,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInDetails, 'apirequest');
    //api get request
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
            <button>
              <Link to={`/${artist.artist_id}`}>Log In</Link>
            </button>
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
