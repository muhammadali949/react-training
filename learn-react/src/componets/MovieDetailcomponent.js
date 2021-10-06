import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Button } from '@mui/material';
import Paper from '@material-ui/core/Paper'

function MovieDetailcomponent() {
    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img style={{ height: '300px', width: '250px' }} src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg' />
                </Grid>
                <Grid item xs={7}>
                    <h1>Joker</h1>
                    <h2>Overview</h2>
                    <p>After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of</p>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ background: '#C0C0C0' }}>Runtime (min.)</p>
                            <p>122</p>
                        </div>{'    '}
                        <div style={{ display: 'flex', marginLeft: '10px' }}>
                            <p style={{ background: '#C0C0C0' }}>Release Date</p>
                            <p>12-02-2021</p>
                        </div>

                    </div>


                </Grid>
            </Grid>
            <Button variant="contained" style={{ width: "100%" }}>Show Reviews (Extracts)</Button>
        </Container>
    )
}

export default MovieDetailcomponent;
