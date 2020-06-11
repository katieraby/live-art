import React, { useState } from 'react';
import ArtistSignUp from './ArtistSignUp';
import { navigate } from '@reach/router';
import axios from 'axios';
import styles from './ArtistLogIn.module.css';

const ArtistLogIn = ({ setArtistInfo, setIsArtist }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInDetails, setLogInDetails] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post(
        `https://live-art-backend.herokuapp.com/artist/${logInDetails.username}`,
        logInDetails
      )
      .then(({ data }) => {
        setArtistInfo({
          username: data.username,
          bio: data.aboutMe,
          paymentPointer: data.paymentPointer,
        });
        setIsArtist(true);
        navigate('/art');
        setLogInDetails({ username: '', password: '' });
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <div>
      {hasAccount ? (
        <div>
          <form className={styles.artistLogInForm} onSubmit={handleSubmit}>
            <label className={styles.artistLogInLabel}>
              Artist Log In Here
            </label>
            <input
              className={styles.artistLogInUsername}
              placeholder="username"
              type="text"
              value={logInDetails.username}
              required
              onChange={(e) =>
                setLogInDetails({ ...logInDetails, username: e.target.value })
              }
            />
            <input
              className={styles.artistLogInPassword}
              placeholder="password"
              type="password"
              value={logInDetails.password}
              required
              onChange={(e) =>
                setLogInDetails({ ...logInDetails, password: e.target.value })
              }
            />
            <button className={styles.artistLogInButton}>Log In</button>
          </form>
          <button
            className={styles.needAccountButton}
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
