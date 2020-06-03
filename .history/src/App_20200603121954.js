import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArtistLogIn from './Components/ArtistLogIn';
import UserLogIn from './Components/UserLogIn';
import LiveArt from './Components/LiveArt';
import IndividualLiveArt from './Components/IndividualLiveArt';

function App() {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    bio: '',
    paymentPointer: '',
  });

  return (
    <div className="App">
      <Header />
      <Router className="main-content">
        <LiveArt path="/" />
        <ArtistLogIn path="/artist-log-in" setArtistInfo={setArtistInfo} />
        <UserLogIn path="/coil-log-in" />
        <IndividualLiveArt
          path="/:username"}
          artistInfo={artistInfo}
        />
      </Router>
    </div>
  );
}

export default App;
