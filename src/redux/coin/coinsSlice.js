import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.coincap.io/v2/assets?limit=100';

const currentTimeStamp = Date.now();

const initialState = {
  coins: [],
  history: [],
};

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const res = await fetch(URL);
  const result = await res.json();
  return result.data;
});

export const fetchHistory = createAsyncThunk('coins/fetchHistory', async (id) => {
  const res = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=d1&start=1677724800000&end=${currentTimeStamp}`);
  const result = await res.json();
  return result.data;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.coins = [...action.payload];
    })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      });
  },
});

export default coinsSlice.reducer;
