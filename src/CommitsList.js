import React from "react";
import Grid from "@mui/material/Grid";
import Commit from "./Commit";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleIsFavoriteFiltered,
    selectIsFavoriteFiltered,
    selectCommitsData,
} from "./features/counter/commitsSlice";

const Title = ({ text }) => (
    <Grid component="h1" item>
        {text}
    </Grid>
);

const CommitsList = () => {
    const isFavoriteFiltered = useSelector(selectIsFavoriteFiltered);
    const commitsData = useSelector(selectCommitsData);

    const dispatch = useDispatch();

    if (commitsData.length === 0) {
        return (
            <Grid item xs={12}>
                <h2>Коммитов нет!</h2>
            </Grid>
        );
    }

    return (
        <>
            {isFavoriteFiltered
                ? commitsData
                      .filter((item) => item.isFavorite)
                      .map((item) => (
                          <Commit key={item.sha} commitData={item} />
                      ))
                : commitsData.map((item) => (
                      <Commit key={item.sha} commitData={item} />
                  ))}
        </>
    );
};

export default CommitsList;
