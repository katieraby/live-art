import React, { useState } from 'react';

const ArtistSignUp = () => {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    password: '',
    paymentPointer: '',
    aboutMe: '',
  });
  return (
    <form className="artistSignUpForm" onSubmit={handleSubmit}>
      <label className="artistSignUpLabel">Artist Sign Up</label>
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
  );
};

export default ArtistSignUp;
