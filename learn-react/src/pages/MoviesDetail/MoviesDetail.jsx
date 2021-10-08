import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Button } from '@mui/material';
import { useParams,useHistory } from 'react-router';
function MoviesDetail() {
    const [movie, setMovie] = useState({})
    const {id}=useParams()
    const history=useHistory()
    
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=742ad2778f4a03c2219378998891964f&language=en-US`)
        .then(res => {
            console.log(res.data)
            setMovie(res.data);
        })
        .catch(err=>console.log(err))
        return () => {
        }
    }, [])
    const HandleClick = (id) => {

        console.log(id)
        history.push(`/review/${id}`)

    }
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
                <Button onClick={() => HandleClick(movie.id)} variant="contained" style={{ width: "100%" }}>Show Reviews (Extracts)</Button>
            </Container>
    )
}

export default MoviesDetail;
