// musicSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMusicList } from "../Slices";

function* fetchMusicListSaga() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const data = yield response.json();

    // Map the data to fit your musicList structure
    const musicList = data.map((item) => ({
      id: item.id,
      title: item.title,
      description: "This is a track description", // Placeholder description
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder URL
      image: item.url, // Use the image URL from the placeholder
    }));

    yield put({ type: "player/fetchMusicList/fulfilled", payload: musicList });
  } catch (error) {
    yield put({
      type: "player/fetchMusicList/rejected",
      payload: error.message,
    });
  }
}

export function* musicSaga() {
  yield takeLatest("player/fetchMusicList", fetchMusicListSaga);
}
