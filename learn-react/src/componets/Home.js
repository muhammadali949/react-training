import React, { Component } from 'react'
import axios from 'axios';
import Container from '@material-ui/core/Container'
import MovieCard from './MovieCard';
export class Home extends Component {
    state = {   // we can also declare state outside of constructor
        movies: [],
        query: ''
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=742ad2778f4a03c2219378998891964f&language=en-US&page=1
        `)
            .then(res => {
                const movies = res.data.results;
                this.setState({ movies });  // setting state will rerender component
            })
    }
    Serach(moviesdata) {
        return moviesdata.filter((moviedata) => moviedata.original_title.toLowerCase().indexOf(this.state.query) > -1)
    }

    render() {
        console.log(this.state.movies)

        return (
            <div>
                <Container>
                    <h2>Search....</h2>
                    <input style={{ width: '500px', padding: '10px', marginBottom: '20px' }} onChange={e => this.setState({ query: e.target.value })} />

                    {/* <Grid container spacing={3}>
                        {this.state.movies.map(movie => (
                            <Grid item xs={12} md={6} lg={4} key={movie.id}>
                                <Paper>
                                    <MovieCard movie={movie} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid> */}
                    <MovieCard movie={this.Serach(this.state.movies)} />

                </Container>
            </div>
        )
    }
}

export default Home;
