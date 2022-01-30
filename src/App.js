import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import { Counter } from "./features/counter/Counter";
import {
    setCommitsData,
    selectCommitsData,
} from "./features/counter/commitsSlice";

const AppContainer = styled(Grid)(({ theme }) => ({
    padding: 20,
}));

function App() {
    const dispatch = useDispatch();

    const commitsData = useSelector(selectCommitsData);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/repos/ftigran/gameSpy/commits")
            .then((response) => response.json())
            .then(
                (commitsData) => {
                    dispatch(setCommitsData(commitsData));
                    setIsLoaded(true);
                    // setItems(commits);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <AppContainer container justifyContent={"center"}>
                <Grid item xs={12} md={10} xl={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid
                                component={"header"}
                                container
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Grid item>
                                    <h1>Коммиты:</h1>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppContainer>
        );
    }
}

export default App;
