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

      <div class="heart-wrap">
        <svg
          class="heart"
          id="heart"
          viewBox="0 0 1920 3000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="heart-path-3"
            transform="translate(974.58,767.88) rotate(-400) scale(0.001)"
          ></path>
          <path
            id="heart-path-2"
            transform="translate(932.84,695.15) rotate(-400) scale(0.001)"
          ></path>
          <path
            id="heart-path-1"
            transform="translate(888.72,629.18) rotate(-400) scale(0.001)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LiveArt;
