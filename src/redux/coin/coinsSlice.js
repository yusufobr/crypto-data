import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URL = 'https://api.coincap.io/v2/assets?limit=20'

const initialState = {
    coins: [],
}

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
    const res = await fetch(URL);
    const result = await res.json();
    console.log(result)
    return result.data
})

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
            state.coins = [...action.payload]
        } )
    }
})

export default coinsSlice.reducer