import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ArtistSignUp path="/signup" />
    </div>
  );
}

export default App;
