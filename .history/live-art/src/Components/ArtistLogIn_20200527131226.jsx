import React, { useState } from 'react';
import ArtistSignUp from './ArtistSignUp';
import { Link } from '@reach/router';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInDetails, setLogInDetails] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInDetails, 'apirequest');
    //api get request
    setLogInDetails({ username: '', password: '' });
  };
  //const artist_id = 10;

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
              {/* <Link to={`/${artist_id}`} /> */}
              Log In
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
