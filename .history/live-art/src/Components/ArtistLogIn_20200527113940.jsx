import React, { useState } from 'react';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className="artistLogInForm">
      {hasAccount ? (
        <div>
          <form>
            <label>Artist Log In</label>
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
