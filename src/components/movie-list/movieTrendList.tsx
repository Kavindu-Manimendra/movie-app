import {Box, Grid, Paper} from "@mui/material";
import type {MovieDataType} from "../../assets/data.ts";
import MovieTrendCard from "../movie-card/movieTrend.tsx";

interface IMovieTrendListProps {
    trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: IMovieTrendListProps) => {
    return (
        <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
            {trendingList.map((movie) => (
                <Grid key={movie.id}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieTrendCard movie={movie} />
                    </Paper>
                </Grid>
            ))}
        </Box>
    );
};

export default MovieTrendList;