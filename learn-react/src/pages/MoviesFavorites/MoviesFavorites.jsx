import React from 'react';
import Card from '../../componets/Card';
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux';

function MoviesFavorites(props) {
    return (
        <div>
        <Container>
         <Card movies={props.favoritemovie}  />
        </Container>            
    </div>
    )
}
const mapStateToprops = state =>{
    return{
        favoritemovie:state.favoritemovie
    }
}

export default connect(mapStateToprops,null)(MoviesFavorites);
