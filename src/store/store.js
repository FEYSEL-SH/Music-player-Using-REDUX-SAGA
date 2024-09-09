
// //just for example it will be deleted
// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../Slices";
// export const store = configureStore({
// reducer :{
//   todo : todoReducer
// }
// })




// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from "../Slices";
import { musicSaga } from '../saga/musicSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the saga
sagaMiddleware.run(musicSaga);

export default store;