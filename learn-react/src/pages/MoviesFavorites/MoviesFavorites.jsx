import React,{useContext} from 'react';
import Card from '../../componets/Card';
import Container from '@material-ui/core/Container'
import {ThemeContext} from '../../App';


function MoviesFavorites() {
    const theme = useContext(ThemeContext);  
    return (
        <div>
        <Container>
         <Card movies={theme.movies} theme={theme} />
        </Container>            
    </div>
    )
}

export default MoviesFavorites;
