import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'

import Card from '../../componets/Card';
import {ThemeContext} from '../../App';

function Home() {
    const theme = useContext(ThemeContext);  
    
    const [movies,setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE}/movie/popular?api_key=742ad2778f4a03c2219378998891964f&language=en-US&page=1
        `)
        .then(res =>setMovies(res.data.results))
        .catch(err=>console.log(err))         
        
        return () => {
            
        }
    }, [])
    return (
        <div>
            <Container>
             <Card movies={movies} theme={theme} />
            </Container>            
        </div>
    )
}

export default Home;
