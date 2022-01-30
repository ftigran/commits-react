import React from "react";
import Grid from "@mui/material/Grid";
import Commit from "./Commit";
import { useSelector } from "react-redux";
import { selectIsFavoriteFiltered, selectCommitsData } from "./commitsSlice";

const CommitsList = () => {
    const isFavoriteFiltered = useSelector(selectIsFavoriteFiltered);
    const commitsData = useSelector(selectCommitsData);

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
