import React, { useState } from 'react';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInDetails, setLogInDetails] = useState({
    username: '',
    password: '',
  });

  return (
    <div>
      {hasAccount ? (
        <div>
          <form className="artistLogInForm">
            <label className="artistLogInLabel">Artist Log In</label>
            <input
              className="artistLogInUsername"
              placeholder="username"
              type="text"
              required
              onChange={(e) =>
                setLogInDetails({ ...logInDetails, username: e.target.value })
              }
            />
            <input
              className="artistLogInPassword"
              placeholder="password"
              type="password"
              required
              onChange={(e) =>
                setLogInDetails({ ...logInDetails, password: e.target.value })
              }
            />
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
        <p>artist sign up</p>
      )}
    </div>
  );
};

export default ArtistLogIn;
