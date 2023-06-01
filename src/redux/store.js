import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coin/coinsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
