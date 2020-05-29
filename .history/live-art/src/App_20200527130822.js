import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArtistLogIn from './Components/ArtistLogIn';
import UserLogIn from './Components/UserLogIn';
import LiveArt from './Components/LiveArt';
import IndividualLiveArt from './Components/IndividualLiveArt';

function App() {
  return (
    <div className="App">
      <Header />
      <Router className="main-content">
        <LiveArt path="/" />
        <ArtistLogIn path="/artist_log_in" />
        <UserLogIn path="/coil_log_in" />
        <IndividualLiveArt path="/:artist_id" />
      </Router>
    </div>
  );
}

export default App;
