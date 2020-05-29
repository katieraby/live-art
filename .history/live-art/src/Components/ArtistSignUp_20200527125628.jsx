import React from 'react';

const ArtistSignUp = () => {
  return (
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
  );
};

export default ArtistSignUp;
