// Favorites.js
import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../Slices";
import {
  favoritesContainer,
  favoritesTitle,
  favoritesTrack,
  favoritesTrackImage,
  favoritesTrackInfo,
  favoritesTrackTitle,
  favoritesTrackDuration,
  removeButton,
} from "../EmotionStyled/FavoritesStyles";

const Favorites = ({ favorites }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={favoritesContainer}>
      <h2 className={favoritesTitle}>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((track) => (
          <div className={favoritesTrack} key={track.id}>
            <img
              src={track.image}
              alt={track.title}
              className={favoritesTrackImage}
            />
            <div className={favoritesTrackInfo}>
              <h3 className={favoritesTrackTitle}>{track.title}</h3>
              <p className={favoritesTrackDuration}>{track.description}</p>
            </div>
            <button
              className={removeButton}
              onClick={() => handleRemove(track.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
