import React, { useState } from 'react';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArtistLogIn from './Components/ArtistLogIn';
import LiveArt from './Components/LiveArt';
import IndividualLiveArt from './Components/IndividualLiveArt';
import styles from './App.module.css';

function App() {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    bio: '',
    paymentPointer: '',
  });
  const [isArtist, setIsArtist] = useState(false);
  const [artistLoggedIn, setArtistLoggedIn] = useState(false);

  return (
    <div className={styles.App}>
      <Header className={styles.headerTop} isArtist={isArtist} />
      <Router className={styles.mainContent}>
        <LiveArt path="/" />
        {!artistLoggedIn && (
          <ArtistLogIn
            path="/artist-log-in"
            setArtistInfo={setArtistInfo}
            setIsArtist={setIsArtist}
            primary={false}
          />
        )}

        <IndividualLiveArt
          path="/art"
          artistInfo={artistInfo}
          isArtist={isArtist}
          primary={false}
        />
      </Router>
    </div>
  );
}

export default App;
