import React from 'react';
import { Link } from '@reach/router';
import styles from './LiveArt.module.css';

const LiveArt = ({ username }) => {
  //populate live art list with artists array
  //use another context of user logged in = true to enable the user actuallly click on the list items

  return (
    <div className={styles.homepage}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#E86252"
          d="M58.7,3.6C58.7,25,29.4,50.1,4,50.1C-21.3,50.1,-42.6,25,-42.6,3.6C-42.6,-17.7,-21.3,-35.5,4,-35.5C29.4,-35.5,58.7,-17.7,58.7,3.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <button className={styles.viewArtButton}>
        <Link to="/art" className={styles.viewArtButtonLink}>
          View Live Art
        </Link>
      </button>
    </div>
  );
};

export default LiveArt;
