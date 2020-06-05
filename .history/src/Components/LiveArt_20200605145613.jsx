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
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#E86252"
          d="M58.7,3.6C58.7,25,29.4,50.1,4,50.1C-21.3,50.1,-42.6,25,-42.6,3.6C-42.6,-17.7,-21.3,-35.5,4,-35.5C29.4,-35.5,58.7,-17.7,58.7,3.6Z"
          transform="translate(100 100)"
        />
        <path
          fill="#E86252"
          d="M26.9,-21.3C36,0.1,45.2,15.8,40.7,27.8C36.2,39.9,18.1,48.5,3.8,46.3C-10.6,44.1,-21.2,31.3,-25.7,19.2C-30.1,7.1,-28.4,-4.1,-23.1,-23.4C-17.7,-42.6,-8.9,-69.9,0,-69.9C8.9,-70,17.9,-42.7,26.9,-21.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default LiveArt;
