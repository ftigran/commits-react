import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commitsData: [],
    isFavoriteFiltered: false,
};

export const commitsSlice = createSlice({
    name: "commits",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setCommitsData: (state, action) => {
            state.commitsData = action.payload;
        },
        toggleIsFavoriteFiltered: (state) => {
            state.isFavoriteFiltered = !state.isFavoriteFiltered;
        },
        setFavoriteCommit: (state, action) => {
            state.commitsData = state.commitsData.map((item) => {
                if (item.sha === action.payload) {
                    const newItem = Object.assign({}, item);
                    newItem.isFavorite = !newItem.isFavorite;
                    return newItem;
                }
                return item;
            });
        },
        deleteCommit: (state, action) => {
            console.log(action);
            state.commitsData = state.commitsData.filter(
                ({ sha }) => sha !== action.payload
            );
        },
    },
});

export const {
    setCommitsData,
    toggleIsFavoriteFiltered,
    setFavoriteCommit,
    deleteCommit,
} = commitsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCommitsData = (state) => state.commits.commitsData;
export const selectIsFavoriteFiltered = (state) =>
    state.commits.isFavoriteFiltered;

export default commitsSlice.reducer;
