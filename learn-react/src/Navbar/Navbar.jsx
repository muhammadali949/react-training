import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Navbar() {
    return (
    <Box>
      <Grid container style={{position:'fixed',zIndex:1}}>
        <Grid item xs={7}> 
        <Item><NavbarLeft /></Item>     
        </Grid>
        <Grid item xs={5}>
          <Item><NavbarRight /></Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Navbar;
