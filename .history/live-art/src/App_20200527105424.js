import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArtistSignUp from './Components/ArtistSignUp';
import UserLogIn from './Components/UserLogIn';
import LiveArt from './Components/LiveArt';
import IndividualLiveArt from './Components/IndividualLiveArt';

function App() {
  return (
    <div className="App">
      <Header />
      <Router className="main-content">
        <LiveArt path="/" />
        <ArtistSignUp path="/sign-up" />
        <UserLogIn path="/coil-log-in" />
        <IndividualLiveArt path="/:artist-id" />
      </Router>
    </div>
  );
}

export default App;
