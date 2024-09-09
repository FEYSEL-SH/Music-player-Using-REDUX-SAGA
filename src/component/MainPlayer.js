import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { play, pause, nextTrack, prevTrack, setVolume } from "../Slices";
import {
  musicPlayer,
  trackInfo,
  trackImage,
  trackTitle,
  controls,
  button,
  volumeSlider,
  volumeIcon,
} from "../EmotionStyled/MainPlayerStyles";

const MainPlayer = () => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const { currentTrackIndex, isPlaying, volume, musicList } = useSelector(
    (state) => ({
      currentTrackIndex: state.todo.currentTrackIndex,
      isPlaying: state.todo.isPlaying,
      volume: state.todo.volume,
      musicList: state.todo.musicList,
    })
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            // Playback started successfully
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex, volume]);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    if (!isNaN(newVolume) && newVolume >= 0 && newVolume <= 1) {
      dispatch(setVolume(newVolume));
    }
  };

  const handleNext = () => {
    dispatch(nextTrack());
  };

  const handlePrevious = () => {
    dispatch(prevTrack());
  };

  const currentTrack = musicList[currentTrackIndex];

  return (
    <div className={musicPlayer}>
      <div className={trackInfo}>
        {currentTrack && (
          <>
            <img
              src={currentTrack.image}
              alt={currentTrack.title}
              className={trackImage}
            />
          </>
        )}
      </div>
      <audio
        ref={audioRef}
        src={currentTrack?.url}
        onEnded={handleNext}
        autoPlay={isPlaying}
      />
      <div className={controls}>
        <button className={button} onClick={handlePrevious}>
          <i className="fa-solid fa-2x fa-backward-fast"></i>
        </button>
        <button
          className={button}
          onClick={() => dispatch(isPlaying ? pause() : play())}
        >
          {isPlaying ? (
            <i className="fa-solid fa-2x fa-pause"></i>
          ) : (
            <i className="fa-solid fa-2x fa-play"></i>
          )}
        </button>
        <button className={button} onClick={handleNext}>
          <i className="fa-solid fa-2x fa-forward-fast"></i>
        </button>
        <br />
        <input
          type="range"
          className={volumeSlider}
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <br />
        <i className={volumeIcon + " fa-solid fa-volume-high"}></i>
      </div>
    </div>
  );
};

export default MainPlayer;
