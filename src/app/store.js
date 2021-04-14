import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import teamReducer from "../features/teamSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        team: teamReducer,
    },
});