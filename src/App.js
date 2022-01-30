import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import CommitsList from "./CommitsList";
import { setCommitsData } from "./features/counter/commitsSlice";

const AppContainer = styled(Grid)(({ theme }) => ({
    padding: 20,
}));

function App() {
    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/repos/ftigran/gameSpy/commits")
            .then((response) => response.json())
            .then(
                (commitsData) => {
                    dispatch(setCommitsData(commitsData));
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
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
                            <Header error={error} isLoaded={isLoaded} />
                        </Grid>
                    </Grid>
                    {!error && isLoaded && <CommitsList />}
                </Grid>
            </Grid>
        </AppContainer>
    );
}

export default App;
