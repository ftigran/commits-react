import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

import { toggleIsFavoriteFiltered } from "./commitsSlice";
import CommitControls from "./CommitControls";

const CommitWrapper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    boxSizing: "border-box",
}));
const FullHeightGrid = styled(Grid)(({ theme }) => ({
    height: "100%",
}));
const P = styled("p")(({ theme }) => ({
    margin: 0,
}));
const AuthorTitle = styled("h5")(({ theme }) => ({
    margin: "0 0 5px",
    color: "#144b6a",
}));
const AuthorAvatar = styled(Avatar)(({ theme }) => ({
    bgcolor: "#ccc",
    height: 52,
    width: 52,
}));

const Commit = ({ commitData }) => {
    const dispatch = useDispatch();

    const onFavoriteFilterClick = () => {
        dispatch(toggleIsFavoriteFiltered());
    };
    const onFavoriteButtonClick = (sha) => {
        dispatch(toggleIsFavoriteFiltered());
    };
    return (
        <Grid item xs={12} sm={6} md={4}>
            <CommitWrapper>
                <FullHeightGrid container>
                    <Grid item xs={3}>
                        <AuthorAvatar
                            alt={commitData?.commit?.committer.name}
                            src={commitData?.committer?.avatar_url}
                        >
                            ?
                        </AuthorAvatar>
                    </Grid>
                    <Grid item xs={9}>
                        <FullHeightGrid
                            container
                            direction={"column"}
                            justifyContent={"space-between"}
                        >
                            <Grid item>
                                <AuthorTitle>
                                    Имя:{" "}
                                    {commitData.author ? (
                                        <a
                                            href={commitData?.author.html_url}
                                            target="_blanc"
                                        >
                                            {commitData?.commit?.author.name}
                                        </a>
                                    ) : (
                                        "не указано"
                                    )}
                                </AuthorTitle>
                                <AuthorTitle>
                                    Логин:{" "}
                                    {commitData?.committer?.login ? (
                                        <a
                                            href={
                                                commitData?.committer.html_url
                                            }
                                            target="_blanc"
                                        >
                                            {commitData?.committer.login}
                                        </a>
                                    ) : (
                                        "не указан"
                                    )}
                                </AuthorTitle>
                                <P>
                                    Сообщение:{" "}
                                    <a
                                        href={commitData.html_url}
                                        target="_blanc"
                                    >
                                        {commitData?.commit.message}
                                    </a>
                                </P>
                            </Grid>

                            <CommitControls
                                sha={commitData.sha}
                                isFavorite={commitData.isFavorite}
                            />
                        </FullHeightGrid>
                    </Grid>
                </FullHeightGrid>
            </CommitWrapper>
        </Grid>
    );
};

export default Commit;
