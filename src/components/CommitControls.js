import React from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { setFavoriteCommit, deleteCommit } from "./commitsSlice";

const CommitControls = ({ sha, isFavorite }) => {
    const dispatch = useDispatch();

    const onFavoriteButtonClick = () => {
        dispatch(setFavoriteCommit(sha));
    };
    const onDeleteButtonClick = () => {
        dispatch(deleteCommit(sha));
    };

    return (
        <Grid container>
            <Checkbox
                checked={!!isFavorite}
                onClick={onFavoriteButtonClick}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
            />

            <Button
                variant="text"
                startIcon={<DeleteIcon />}
                onClick={onDeleteButtonClick}
            >
                Удалить
            </Button>
        </Grid>
    );
};

export default CommitControls;
