import React, { Component } from 'react'
import axios from 'axios';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Button } from '@mui/material';

export class MoviesDescription extends Component {

    state = {   // we can also declare state outside of constructor
        movieDetal: []
    }

    componentDidMount() {
        const moviesId = this.props.match.params.id
        console.log(moviesId)
        axios.get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=742ad2778f4a03c2219378998891964f&language=en-US`)
            .then(res => {
                console.log(res.data)
                const movieDetal = res.data;
                this.setState({ movieDetal });  // setting state will rerender component

            })
    }
    HandleClick(id) {

        console.log(id)
        this.props.history.push(`/review/${id}`)

    }

    render() {
        const movie = this.state.movieDetal;
        console.log(movie)
        // console.log(movie.genres + '0000000')

        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img style={{ height: '300px', width: '250px' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                    </Grid>
                    <Grid item xs={7}>
                        <h1>{movie.original_title}</h1>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <p style={{ background: '#C0C0C0' }}>Runtime (min.)</p>
                                <p>{movie.runtime}</p>
                            </div>{'    '}
                            <div style={{ display: 'flex', marginLeft: '10px' }}>
                                <p style={{ background: '#C0C0C0' }}>Release Date</p>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            <p style={{ background: '#C0C0C0' }}>Genres</p>
                            {
                                movie.genres?.map(d => {
                                    return <p key={d.id}>{d.name}</p>
                                })
                            }

                        </div>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            <p style={{ background: '#C0C0C0' }}>Production Companies</p>
                            {
                                movie.production_companies?.map(p => {
                                    return <p key={p.id}>{p.name}</p>
                                })

                            }
                        </div>
                    </Grid>
                </Grid>
                <Button onClick={() => this.HandleClick(movie.id)} variant="contained" style={{ width: "100%" }}>Show Reviews (Extracts)</Button>
            </Container>
        )
    }
}

export default MoviesDescription;

// import React from 'react'



// function MoviesDescription() {
//     const { id } = useParams();
//     console.log(id)

//     return (
//         <Container>
//             <h1>Joker</h1>
//             <Grid container spacing={2}>
//                 <Grid item xs={3}>
//                     <img style={{ height: '300px', width: '250px' }} src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg' />
//                 </Grid>
//                 <Grid item xs={7}>
//                     <h2>Overview</h2>
//                     <p>After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of</p>
//                     <h3>vote_average</h3>
//                     <p>7</p>
//                     <h3>popularity</h3>
//                     <p>5841.184</p>

//                 </Grid>
//             </Grid>
//             <Button variant="contained" style={{ width: "100%" }}>Show Reviews (Extracts)</Button>
//         </Container>
//     )
// }

// export default MoviesDescription;
