import {Grid, Paper} from "@mui/material";
import type {MovieDataType} from "../../assets/data.ts";
import MovieCard from "../movie-card";

interface IMovieListProps {
    recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: IMovieListProps) => {
    return (
        <Grid container spacing={2}>
            {recommendList.map((item) => (
                <Grid
                    key={item.id}
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieCard movie={item} />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;