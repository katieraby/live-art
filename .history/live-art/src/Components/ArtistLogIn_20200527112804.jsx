import React, { useState } from 'react';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className="artistLogInForm">
      {hasAccount ? (
        <div>
          <form></form>
          <p>Need an account? Sign Up here</p>{' '}
        </div>
      ) : (
        <p>artist sign up</p>
      )}
    </div>
  );
};

export default ArtistLogIn;
