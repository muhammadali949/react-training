import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'

import Card from '../../componets/Card';

function Home() {

    const [movies,setMovies] = useState([])
    const [queryValue,setQueryValue] = useState('')
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=742ad2778f4a03c2219378998891964f&language=en-US&page=1&include_adult=false&query=${queryValue}
        `)
        .then(res =>setMovies(res.data.results))
        .catch(err=>console.log(err))
        
        return () => {
            
        }
    }, [queryValue])
    return (
        <div>
            <Container>
            <h2>Search....</h2>
            <input style={{ width: '500px', padding: '10px', marginBottom: '20px' }} value={queryValue} onChange={e => setQueryValue(e.target.value)} />
             <Card movies={movies} />
            </Container>            
        </div>
    )
}

export default Home;
