import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        player : null,
    },
    reducers: {
        clickedPlayer: (state, action) => {
        state.player = action.payload;
        },
    },
});

export const { clickedPlayer } = playerSlice.actions;

export const selectPlayer = (state) => state.player.player;

export default playerSlice.reducer