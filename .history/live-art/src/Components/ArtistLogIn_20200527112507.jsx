import React, { useState } from 'react';

const ArtistLogIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    {hasAccount :
    <div className="artistLogInForm">
      <p>artist Log In</p>
    </div> ? <div className='artistSignUpForm'></div>}
  );
};

export default ArtistLogIn;
