import React, { useState } from 'react';
import { Link } from '@reach/router';
import styles from './LiveArt.module.css';

const LiveArt = ({ isArtist, setArtistInfo, setIsArtist }) => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logOut = (e) => {
    setArtistInfo({
      username: '',
      bio: '',
      paymentPointer: '',
    });
    setIsArtist(false);
    setLoggedOut(true);
  };

  return (
    <div className={styles.homepage}>
      {!isArtist ? (
        <>
          <div className={styles.logInText}>
            <button className={styles.artistLogInHereButton}>
              <Link to="/artist-log-in" className={styles.logInLink}>
                Artist Log In
              </Link>
            </button>
          </div>

          <button className={styles.viewArtButton}>
            <Link to="/art" className={styles.viewArtButtonLink}>
              View Live Art
            </Link>
          </button>
        </>
      ) : (
        <button onclick={logOut} className={styles.artistLogInHereButton}>
          Artist Log Out
        </button>
      )}

      <div className={styles.blobContainer}>
        <svg
          className={styles.svgOne}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#B0BEA9"
            d="M34.8,-47.6C47.3,-38.8,61.2,-31.6,70.7,-19C80.3,-6.4,85.5,11.5,79.9,25.1C74.2,38.6,57.8,47.7,42.6,58.7C27.5,69.7,13.8,82.5,0.1,82.4C-13.6,82.3,-27.3,69.3,-43.1,58.6C-59,47.8,-77,39.4,-84.2,25.4C-91.5,11.5,-87.9,-8,-79.9,-23.9C-72,-39.9,-59.6,-52.5,-45.5,-60.8C-31.5,-69.1,-15.7,-73.3,-2.3,-70.1C11.1,-67,22.3,-56.5,34.8,-47.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className={styles.svgOne}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E86252"
            d="M38.4,-57.4C49.4,-44.8,57.8,-33.2,59,-21.2C60.1,-9.2,54,3.2,51.1,18C48.2,32.8,48.5,50,40.5,58C32.5,66.1,16.3,65,4.7,58.5C-6.8,52,-13.6,40,-28.3,34.2C-43,28.3,-65.5,28.5,-76.3,19.2C-87.1,9.9,-86.1,-8.9,-74.3,-17.6C-62.4,-26.2,-39.7,-24.8,-25.5,-36.3C-11.3,-47.8,-5.7,-72.3,4,-77.8C13.7,-83.3,27.4,-69.9,38.4,-57.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className={styles.svgOne}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#223127"
            d="M36.9,-47.6C48.8,-34,60.1,-23.3,64.4,-9.8C68.7,3.8,65.9,20.1,58,33C50,45.9,36.8,55.4,21.4,62.6C6.1,69.7,-11.5,74.7,-21.6,67.5C-31.8,60.3,-34.7,41,-44.1,25.2C-53.5,9.4,-69.4,-2.8,-72,-16.9C-74.5,-31,-63.6,-46.9,-49.4,-60.1C-35.2,-73.3,-17.6,-83.8,-2.5,-80.8C12.5,-77.8,25,-61.3,36.9,-47.6Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* <svg
          className={styles.svg}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#B0BEA9"
            d="M32.2,-16C45.8,4.9,63.7,26,59,37.8C54.4,49.6,27.2,52.2,5.6,48.9C-15.9,45.6,-31.8,36.6,-38.5,23.6C-45.3,10.6,-42.9,-6.4,-34.9,-24.1C-27,-41.8,-13.5,-60.2,-2.1,-59C9.3,-57.8,18.6,-37,32.2,-16Z"
            transform="translate(100 100)"
          />
        </svg> */}
        <svg
          className={styles.svg}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BD4F6C"
            d="M35.7,-46.3C50.7,-38.3,70.2,-33.7,67.6,-25.7C65.1,-17.8,40.3,-6.3,34.3,10.8C28.3,28,40.9,50.9,38.3,60.3C35.7,69.7,17.9,65.6,5.2,58.5C-7.5,51.4,-15,41.2,-22.3,33.3C-29.6,25.4,-36.7,19.8,-47.3,10C-57.9,0.2,-72,-13.9,-67.7,-20.4C-63.4,-26.9,-40.7,-25.9,-26.4,-34.1C-12,-42.4,-6,-60,2.2,-63C10.4,-66,20.7,-54.4,35.7,-46.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className={styles.svg}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#B0BEA9"
            d="M50.3,-60.2C53.7,-47,36.9,-23.5,28.2,-8.7C19.5,6,18.8,12.1,15.5,25.4C12.1,38.8,6,59.5,-4.4,63.9C-14.9,68.3,-29.7,56.4,-42.3,43.1C-54.9,29.7,-65.1,14.9,-68,-2.8C-70.8,-20.6,-66.3,-41.1,-53.7,-54.4C-41.1,-67.6,-20.6,-73.5,1.5,-74.9C23.5,-76.4,47,-73.4,50.3,-60.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className={styles.svgOne}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E86252"
            d="M47.2,-48.2C54.9,-39.6,50.3,-19.8,52.1,1.8C53.9,23.4,62.1,46.9,54.5,54C46.9,61.1,23.4,51.9,5.7,46.2C-12.1,40.6,-24.2,38.4,-38.6,31.3C-53.1,24.2,-70,12.1,-71.1,-1.1C-72.3,-14.3,-57.6,-28.6,-43.1,-37.2C-28.6,-45.8,-14.3,-48.6,2.7,-51.4C19.8,-54.1,39.6,-56.8,47.2,-48.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default LiveArt;
