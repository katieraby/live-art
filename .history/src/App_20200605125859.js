import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArtistLogIn from './Components/ArtistLogIn';
import LiveArt from './Components/LiveArt';
import IndividualLiveArt from './Components/IndividualLiveArt';

function App() {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    bio: '',
    paymentPointer: '',
  });
  const [isArtist, setIsArtist] = useState(false);

  return (
    <div className="App">
      <Header />
      <Router className="main-content">
        <LiveArt path="/" />
        {!isArtist && (
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
