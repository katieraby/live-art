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
      <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#E86252"
          d="M58.7,3.6C58.7,25,29.4,50.1,4,50.1C-21.3,50.1,-42.6,25,-42.6,3.6C-42.6,-17.7,-21.3,-35.5,4,-35.5C29.4,-35.5,58.7,-17.7,58.7,3.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#B0BEA9"
          d="M32.2,-16C45.8,4.9,63.7,26,59,37.8C54.4,49.6,27.2,52.2,5.6,48.9C-15.9,45.6,-31.8,36.6,-38.5,23.6C-45.3,10.6,-42.9,-6.4,-34.9,-24.1C-27,-41.8,-13.5,-60.2,-2.1,-59C9.3,-57.8,18.6,-37,32.2,-16Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default LiveArt;
