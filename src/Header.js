import React from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleIsFavoriteFiltered,
    selectIsFavoriteFiltered,
} from "./components/commitsSlice";

const Title = ({ text }) => (
    <Grid component="h1" item>
        {text}
    </Grid>
);

const Header = ({ error, isLoaded }) => {
    const isFavoriteFiltered = useSelector(selectIsFavoriteFiltered);
    const dispatch = useDispatch();
    const onFavoriteFilterClick = () => {
        dispatch(toggleIsFavoriteFiltered());
    };
    if (error) {
        return <Title text={`Ошибка: ${error.message}`} />;
    } else if (!isLoaded) {
        return <Title text={"Загрузка..."} />;
    } else {
        return (
            <>
                <Title text={"Коммиты:"} />
                <Grid item>
                    <Checkbox
                        checked={isFavoriteFiltered}
                        onClick={onFavoriteFilterClick}
                        icon={<FilterAltOffIcon />}
                        checkedIcon={<FilterAltIcon />}
                    />
                </Grid>
            </>
        );
    }
};

export default Header;
