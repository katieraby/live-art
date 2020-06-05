import React from 'react';
import { Link } from '@reach/router';
import styles from './LiveArt.module.css';

const LiveArt = ({ username }) => {
  //populate live art list with artists array
  //use another context of user logged in = true to enable the user actuallly click on the list items

  return (
    <div className={styles.homepage}>
      <button className={styles.viewArtButton}>
        <Link to="/art" className={styles.viewArtButtonLink}>
          View Live Art
        </Link>
      </button>
      <div className={styles.blobContainer}>
        <svg
          className={styles.svg}
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
          className={styles.svg}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E86252"
            d="M58.7,3.6C58.7,25,29.4,50.1,4,50.1C-21.3,50.1,-42.6,25,-42.6,3.6C-42.6,-17.7,-21.3,-35.5,4,-35.5C29.4,-35.5,58.7,-17.7,58.7,3.6Z"
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
            d="M32.2,-16C45.8,4.9,63.7,26,59,37.8C54.4,49.6,27.2,52.2,5.6,48.9C-15.9,45.6,-31.8,36.6,-38.5,23.6C-45.3,10.6,-42.9,-6.4,-34.9,-24.1C-27,-41.8,-13.5,-60.2,-2.1,-59C9.3,-57.8,18.6,-37,32.2,-16Z"
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
            d="M47.2,-48.2C54.9,-39.6,50.3,-19.8,52.1,1.8C53.9,23.4,62.1,46.9,54.5,54C46.9,61.1,23.4,51.9,5.7,46.2C-12.1,40.6,-24.2,38.4,-38.6,31.3C-53.1,24.2,-70,12.1,-71.1,-1.1C-72.3,-14.3,-57.6,-28.6,-43.1,-37.2C-28.6,-45.8,-14.3,-48.6,2.7,-51.4C19.8,-54.1,39.6,-56.8,47.2,-48.2Z"
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
      </div>
    </div>
  );
};

export default LiveArt;
