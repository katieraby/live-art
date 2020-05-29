import React, { useState } from 'react';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className="artistLogInForm">
      {hasAccount ? <form></form> : <p>artist sign up</p>}
    </div>
  );
};

export default ArtistLogIn;
