import React from 'react';
import './App.css';
import Header from './Components/Header';
import ArtistSignUp from './Components/ArtistSignUp';
import UserLogIn from './Components/UserLogIn';

function App() {
  return (
    <div className="App">
      <Header />
      <ArtistSignUp path="/sign-up" />
      <UserLogIn path="coil-log-in" />
    </div>
  );
}

export default App;
