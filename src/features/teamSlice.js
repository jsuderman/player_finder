import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        team : null,
    },
    reducers: {
        clickedTeam: (state, action) => {
        state.team = action.payload;
        },
    },
});

export const { clickedTeam } = teamSlice.actions;

export const selectTeam = (state) => state.team.team;

export default teamSlice.reducer