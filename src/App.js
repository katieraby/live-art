import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import ArtistLogIn from "./Components/ArtistLogIn";
import UserLogIn from "./Components/UserLogIn";
import LiveArt from "./Components/LiveArt";
import IndividualLiveArt from "./Components/IndividualLiveArt";

function App() {
  const [artistInfo, setArtistInfo] = useState({
    username: "",
    bio: "",
    paymentPointer: "",
  });
  const [isArtist, setIsArtist] = useState(false);

  return (
    <div className="App">
      <Header />
      <Router className="main-content">
        <LiveArt path="/" username={artistInfo.username} />
        <ArtistLogIn
          path="/artist-log-in"
          setArtistInfo={setArtistInfo}
          setIsArtist={setIsArtist}
          primary={false}
        />
        <UserLogIn path="/coil-log-in" />
        <IndividualLiveArt
          path="/:username"
          artistInfo={artistInfo}
          isArtist={isArtist}
          primary={false}
        />
      </Router>
    </div>
  );
}

export default App;
