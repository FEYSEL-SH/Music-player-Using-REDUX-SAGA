/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTracks,
  selectFavorites,
  fetchMusicList,
  toggleFavorite,
  setCurrentTrackIndex,
  playSelectedTrack,
  removeMusic,
  addMusic,
  updateMusic,
} from "../Slices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  musicContainerStyle,
  trackStyle,
  trackImageStyle,
  trackInfoStyle,
  trackTitleStyle,
  trackDurationStyle,
  favoriteButtonStyle,
  removeButtonStyle,
  editFormStyle,
  editInputStyle,
  saveButtonStyle,
  cancelButtonStyle,
} from "../EmotionStyled/MusicListStyles";

const MusicList = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(selectTracks);
  const favorites = useSelector(selectFavorites);
  const [showAddMusic, setShowAddMusic] = useState(false);
  const [editTrackId, setEditTrackId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    dispatch(fetchMusicList());
  }, [dispatch]);

  const handleToggleFavorite = (track) => {
    dispatch(toggleFavorite(track.id));
  };

  const handleTrackClick = (index) => {
    dispatch(setCurrentTrackIndex(index));
    dispatch(playSelectedTrack());
  };

  const handleRemoveTrack = (trackId) => {
    dispatch(removeMusic(trackId));
  };

  const toggleAddMusic = () => {
    setShowAddMusic((prev) => !prev);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const newTrack = {
        id: Date.now(),
        title: file.name,
        description: "Uploaded track",
        url: fileUrl,
        image: "https://via.placeholder.com/150",
      };
      dispatch(addMusic(newTrack));
      event.target.value = "";
      setShowAddMusic(false);
    }
  };

  const handleEditClick = (track) => {
    setEditTrackId(track.id);
    setEditFormData({ title: track.title, description: track.description });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMusic({ id: editTrackId, ...editFormData }));
    setEditTrackId(null);
    setEditFormData({ title: "", description: "" });
  };

  return (
    <div css={musicContainerStyle}>
      <h2>All Tracks</h2>
      <button css={favoriteButtonStyle} onClick={toggleAddMusic}>
        <FontAwesomeIcon icon={faPlus} /> Add Music
      </button>
      {showAddMusic && (
        <div css={{ margin: "10px 0" }}>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            required
            css={{ marginBottom: "10px" }}
          />
        </div>
      )}
      {tracks.length === 0 ? (
        <p>No tracks found.</p>
      ) : (
        tracks.map((track, index) => (
          <div key={track.id}>
            <div css={trackStyle} onClick={() => handleTrackClick(index)}>
              <img src={track.image} alt={track.title} css={trackImageStyle} />
              <div css={trackInfoStyle}>
                <h6 css={trackTitleStyle}>{track.title}</h6>
                <p css={trackDurationStyle}>{track.description}</p>
              </div>
              <button
                css={favoriteButtonStyle}
                onClick={() => handleToggleFavorite(track)}
                aria-label={`Toggle favorite for ${track.title}`}
              >
                <FontAwesomeIcon
                  icon={
                    favorites.some((item) => item.id === track.id)
                      ? solidHeart
                      : regularHeart
                  }
                  css={{
                    color: favorites.some((item) => item.id === track.id)
                      ? "#4caf50"
                      : "#7f8c8d",
                  }}
                />
              </button>
              <button
                css={removeButtonStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTrack(track.id);
                }}
                aria-label={`Remove ${track.title} from the list`}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                css={favoriteButtonStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(track);
                }}
                aria-label={`Edit ${track.title}`}
              >
                Edit
              </button>
            </div>
            {editTrackId === track.id && (
              <form onSubmit={handleEditSubmit} css={editFormStyle}>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  placeholder="Edit Title"
                  required
                  css={editInputStyle}
                />
                <input
                  type="text"
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  placeholder="Edit Description"
                  required
                  css={editInputStyle}
                />
                <button type="submit" css={saveButtonStyle}>
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditTrackId(null)}
                  css={cancelButtonStyle}
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MusicList;
