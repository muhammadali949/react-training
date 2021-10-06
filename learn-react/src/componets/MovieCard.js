import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { CardActionArea } from '@mui/material'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    disableRipple: false
}));
function MovieCard({ movie }) {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            {movie.map(movie => (
                <Grid item xs={12} md={6} lg={4} key={movie.id}>
                    <Paper>
                        <Card className={classes.disableRipple}>
                            <CardActionArea>
                                <Link to={`/description/${movie.id}`}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                        alt="movie_img"
                                    />
                                </Link>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie.original_title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {movie.release_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {movie.vote_average}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Paper>
                </Grid>
            ))}
        </Grid>


    )
}

export default MovieCard;
