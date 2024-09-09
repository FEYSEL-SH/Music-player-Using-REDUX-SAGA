// // // todoSlices.js
// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // const initialState = {
// //   isLoading: false,
// //   error: false,
// //   currentTrackIndex: 0,
// //   isPlaying: false,
// //   volume: 0.1,
// //   musicList: [
// //     {
// //       id: 1,
// //       title: "Track 1",
// //       description: "This is the first track",
// //       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 2,
// //       title: "Track 2",
// //       description: "This is the second track",
// //       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 3,
// //       title: "Track 3",
// //       description: "This is the third track",
// //       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
// //       image: "https://via.placeholder.com/150",
// //     },
// //   ],
// //   favorites: [],
// // };

// // // Async thunk to fetch music list
// // export const fetchMusicList = createAsyncThunk(
// //   "player/fetchMusicList",
// //   async () => {
// //     return initialState.musicList; // Simulated API call
// //   }
// // );

// // const todoSlice = createSlice({
// //   name: "todo",
// //   initialState,
// //   reducers: {
// //     play(state) {
// //       state.isPlaying = true;
// //     },
// //     pause(state) {
// //       state.isPlaying = false;
// //     },
// //     nextTrack(state) {
// //       state.currentTrackIndex =
// //         (state.currentTrackIndex + 1) % state.musicList.length;
// //     },
// //     prevTrack(state) {
// //       state.currentTrackIndex =
// //         (state.currentTrackIndex - 1 + state.musicList.length) %
// //         state.musicList.length;
// //     },
// //     setVolume(state, action) {
// //       state.volume = action.payload;
// //     },
// //     setCurrentTrackIndex(state, action) {
// //       state.currentTrackIndex = action.payload;
// //     },
// //     playSelectedTrack(state) {
// //       state.isPlaying = true;
// //     },
// //     removeMusic(state, action) {
// //       state.musicList = state.musicList.filter(
// //         (item) => item.id !== action.payload
// //       );
// //     },
// //     toggleFavorite(state, action) {
// //       const trackId = action.payload;
// //       const existingIndex = state.favorites.findIndex(
// //         (track) => track.id === trackId
// //       );

// //       if (existingIndex >= 0) {
// //         state.favorites.splice(existingIndex, 1);
// //       } else {
// //         const trackToAdd = state.musicList.find(
// //           (track) => track.id === trackId
// //         );
// //         if (trackToAdd) {
// //           state.favorites.push(trackToAdd);
// //         }
// //       }
// //     },
// //     handleSearchMusic(state, action) {
// //       // Placeholder for search functionality
// //     },
// //     addMusic(state, action) {
// //       state.musicList.push(action.payload); // Add the new track to the music list
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder.addCase(fetchMusicList.pending, (state) => {
// //       state.isLoading = true;
// //     });
// //     builder.addCase(fetchMusicList.fulfilled, (state, action) => {
// //       state.isLoading = false;
// //       state.musicList = action.payload;
// //     });
// //     builder.addCase(fetchMusicList.rejected, (state) => {
// //       state.isLoading = false;
// //       state.error = true;
// //     });
// //   },
// // });

// // // Export actions
// // export const {
// //   play,
// //   pause,
// //   nextTrack,
// //   prevTrack,
// //   setVolume,
// //   setCurrentTrackIndex,
// //   playSelectedTrack,
// //   removeMusic, // Keep this action
// //   toggleFavorite,
// //   handleSearchMusic,
// //   addMusic,
// // } = todoSlice.actions;

// // // Export selectors
// // export const selectTracks = (state) => state.todo.musicList;
// // export const selectFavorites = (state) => state.todo.favorites;

// // // Export reducer
// // export default todoSlice.reducer;









// // todoSlices.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Set the initial state
// const initialState = {
//   isLoading: false,
//   error: null,
//   currentTrackIndex: 0,
//   isPlaying: false,
//   volume: 0.1,
//   musicList: [], // Start with an empty array
//   favorites: [],
// };

// // Async thunk to fetch music list from a placeholder API
// export const fetchMusicList = createAsyncThunk(
//   "player/fetchMusicList",
//   async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
//     const data = await response.json();
    
//     // Map the data to fit your musicList structure
//     return data.map(item => ({
//       id: item.id,
//       title: item.title,
//       description: "This is a track description", // Placeholder description
//       url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder URL
//       image: item.url, // Use the image URL from the placeholder
//     }));
//   }
// );

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     play(state) {
//       state.isPlaying = true;
//     },
//     pause(state) {
//       state.isPlaying = false;
//     },
//     nextTrack(state) {
//       state.currentTrackIndex =
//         (state.currentTrackIndex + 1) % state.musicList.length;
//     },
//     prevTrack(state) {
//       state.currentTrackIndex =
//         (state.currentTrackIndex - 1 + state.musicList.length) %
//         state.musicList.length;
//     },
//     setVolume(state, action) {
//       state.volume = action.payload;
//     },
//     setCurrentTrackIndex(state, action) {
//       state.currentTrackIndex = action.payload;
//     },
//     playSelectedTrack(state) {
//       state.isPlaying = true;
//     },
//     removeMusic(state, action) {
//       state.musicList = state.musicList.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//     toggleFavorite(state, action) {
//       const trackId = action.payload;
//       const existingIndex = state.favorites.findIndex(
//         (track) => track.id === trackId
//       );

//       if (existingIndex >= 0) {
//         state.favorites.splice(existingIndex, 1);
//       } else {
//         const trackToAdd = state.musicList.find(
//           (track) => track.id === trackId
//         );
//         if (trackToAdd) {
//           state.favorites.push(trackToAdd);
//         }
//       }
//     },
//     handleSearchMusic(state, action) {
//       // Placeholder for search functionality
//     },
//     addMusic(state, action) {
//       state.musicList.push(action.payload); // Add the new track to the music list
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchMusicList.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchMusicList.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.musicList = action.payload; // Set the fetched music list
//     });
//     builder.addCase(fetchMusicList.rejected, (state) => {
//       state.isLoading = false;
//       state.error = true;
//     });
//   },
// });

// // Export actions
// export const {
//   play,
//   pause,
//   nextTrack,
//   prevTrack,
//   setVolume,
//   setCurrentTrackIndex,
//   playSelectedTrack,
//   removeMusic,
//   toggleFavorite,
//   handleSearchMusic,
//   addMusic,
// } = todoSlice.actions;

// // Export selectors
// export const selectTracks = (state) => state.todo.musicList;
// export const selectFavorites = (state) => state.todo.favorites;

// // Export reducer
// export default todoSlice.reducer;














// todoSlices.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Set the initial state
const initialState = {
  isLoading: false,
  error: null,
  currentTrackIndex: 0,
  isPlaying: false,
  volume: 0.1,
  musicList: [], // Start with an empty array
  favorites: [],
};

// Async thunk to fetch music list from a placeholder API
export const fetchMusicList = createAsyncThunk(
  "player/fetchMusicList",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
    const data = await response.json();
    
    // Map the data to fit your musicList structure
    return data.map(item => ({
      id: item.id,
      title: item.title,
      description: "This is a track description", // Placeholder description
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder URL
      image: item.url, // Use the image URL from the placeholder
    }));
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    nextTrack(state) {
      state.currentTrackIndex =
        (state.currentTrackIndex + 1) % state.musicList.length;
    },
    prevTrack(state) {
      state.currentTrackIndex =
        (state.currentTrackIndex - 1 + state.musicList.length) %
        state.musicList.length;
    },
    setVolume(state, action) {
      state.volume = action.payload;
    },
    setCurrentTrackIndex(state, action) {
      state.currentTrackIndex = action.payload;
    },
    playSelectedTrack(state) {
      state.isPlaying = true;
    },
    removeMusic(state, action) {
      state.musicList = state.musicList.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleFavorite(state, action) {
      const trackId = action.payload;
      const existingIndex = state.favorites.findIndex(
        (track) => track.id === trackId
      );

      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        const trackToAdd = state.musicList.find(
          (track) => track.id === trackId
        );
        if (trackToAdd) {
          state.favorites.push(trackToAdd);
        }
      }
    },
    handleSearchMusic(state, action) {
      // Placeholder for search functionality
    },
    addMusic(state, action) {
      state.musicList.push(action.payload); // Add the new track to the music list
    },
    updateMusic(state, action) { // New action to update music
      const { id, title, description } = action.payload;
      const trackIndex = state.musicList.findIndex(track => track.id === id);
      if (trackIndex !== -1) {
        state.musicList[trackIndex] = { ...state.musicList[trackIndex], title, description };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMusicList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMusicList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.musicList = action.payload; // Set the fetched music list
    });
    builder.addCase(fetchMusicList.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

// Export actions
export const {
  play,
  pause,
  nextTrack,
  prevTrack,
  setVolume,
  setCurrentTrackIndex,
  playSelectedTrack,
  removeMusic,
  toggleFavorite,
  handleSearchMusic,
  addMusic,
  updateMusic, // Export the new updateMusic action
} = todoSlice.actions;

// Export selectors
export const selectTracks = (state) => state.todo.musicList;
export const selectFavorites = (state) => state.todo.favorites;

// Export reducer
export default todoSlice.reducer;