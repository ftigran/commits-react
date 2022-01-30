import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import commitsReducer from "../features/counter/commitsSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        commits: commitsReducer,
    },
});
