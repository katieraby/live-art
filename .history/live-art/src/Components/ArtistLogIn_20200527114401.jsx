import React, { useState } from 'react';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div>
      {hasAccount ? (
        <div>
          <form className="artistLogInForm">
            <label className="artistLogInLabel">Artist Log In</label>
            <input className="artistLogInUserName" placeholder="username" />
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
