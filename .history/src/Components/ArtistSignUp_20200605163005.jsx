import React, { useState } from 'react';
import axios from 'axios';
import styles from './ArtistSignUp.module.css';

const ArtistSignUp = ({ setHasAccount }) => {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    password: '',
    aboutMe: '',
    paymentPointer: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post('https://live-art-backend.herokuapp.com/artist', artistInfo)
      .then(() => {
        setArtistInfo({
          username: '',
          password: '',
          aboutMe: '',
          paymentPointer: '',
        });
        setHasAccount(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signUp">
      <form className="artistSignUpForm" onSubmit={handleSubmit}>
        <label className="artistSignUpLabel">Artist Sign Up</label>
        <input
          className="artistSignUpUsername"
          placeholder="username"
          type="text"
          value={artistInfo.username}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, username: e.target.value })
          }
        />
        <input
          className="artistLogInPassword"
          placeholder="password"
          type="password"
          value={artistInfo.password}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, password: e.target.value })
          }
        />
        <textarea
          className="artistSignUpaboutMe"
          placeholder="aboutMe"
          value={artistInfo.aboutMe}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, aboutMe: e.target.value })
          }
        />
        <input
          className="artistLogInPaymentPointer"
          placeholder="payment pointer"
          value={artistInfo.paymentPointer}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, paymentPointer: e.target.value })
          }
        />
        <button>Sign Up</button>
      </form>
      <button
        onClick={() => {
          setHasAccount(true);
        }}
      >
        Already have an account? Log in here
      </button>
      <p>
        Don't have a payment pointer? Read about web monetization and setting
        one up <a href="https://coil.com/about">here</a>
      </p>
    </div>
  );
};

export default ArtistSignUp;
