// App.js
import React, { useState } from "react";
import Header from "./component/Header";
import Navbar from "./component/Nav-bar";
import MainPlayer from "./component/MainPlayer";
import MusicList from "./component/MusicList";
import Favorites from "./component/Favorites";

import { useSelector } from "react-redux";
import { selectFavorites } from "./Slices"; // Adjust the import based on your file structure

function App() {
  const [view, setView] = useState("home"); // State to manage the current view
  const favorites = useSelector(selectFavorites); // Get favorites from Redux store

  const toggleFavoritesView = () => {
    setView("favorites"); // Set view to favorites
  };

  const handleHomeClick = () => {
    setView("home"); // Set view to home
  };

  const handlePlaylistClick = () => {
    setView("playlist"); // Set view to playlist
  };

  return (
    <div className="App">
      <Header />
      <Navbar
        onFavoritesToggle={toggleFavoritesView}
        onHomeClick={handleHomeClick}
        onPlaylistClick={handlePlaylistClick} // Pass the playlist click function
        activeLink={view} // Pass the active link
      />
      <MainPlayer />
      {view === "favorites" && <Favorites favorites={favorites} />}
      {/* Render Playlist when toggled */}
      {view === "home" && <MusicList />}{" "}
      {/* Render Music List when home is active */}
    </div>
  );
}

export default App;
