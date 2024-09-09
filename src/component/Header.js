// Header.js
import React, { useState, useRef } from "react";
import {
  headerContainer,
  search,
  headerTitle,
  searchResults,
  searchItem,
  trackImage,
  trackTitle,
  trackDuration,
} from "../EmotionStyled/HeaderStyles";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchMusic } from "../Slices";
import { selectTracks } from "../Slices";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const tracks = useSelector(selectTracks);
  const searchRef = useRef(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);
  };

  const handleBlur = () => {
    setShowResults(false);
  };

  const handleFocus = () => {
    setShowResults(true);
  };

  const filteredTracks = searchTerm
    ? tracks.filter((track) =>
        track.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className={headerContainer}>
      <h2 className={headerTitle}>Music Player App</h2>
      <input
        className={search}
        type="text"
        placeholder="Search tracks..."
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <i className="fa-solid fa-user"></i>
      {showResults && filteredTracks.length > 0 && (
        <div className={searchResults}>
          {filteredTracks.map((track) => (
            <div key={track.id} className={searchItem}>
              <img src={track.image} alt={track.title} className={trackImage} />
              <div className="track-info">
                <h3 className={trackTitle}>{track.title}</h3>
                <p className={trackDuration}>{track.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
