import { configureStore } from "@reduxjs/toolkit";
import commitsReducer from "../components/commitsSlice";

export const store = configureStore({
    reducer: {
        commits: commitsReducer,
    },
});
