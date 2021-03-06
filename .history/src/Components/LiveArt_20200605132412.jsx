import React from 'react';
import { Link } from '@reach/router';

const LiveArt = ({ username }) => {
  //populate live art list with artists array
  //use another context of user logged in = true to enable the user actuallly click on the list items

  return (
    <div>
      <button>
        <Link to="/art">View Live Art</Link>
      </button>
    </div>
  );
};

export default LiveArt;
