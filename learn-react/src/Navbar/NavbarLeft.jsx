import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

function NavbarLeft() {
    return (
        <div style={{display:'flex' ,background:'#404040'}}>
            <div style={{display:'flex',width:'50%',justifyContent:'space-evenly',alignItems:'center' }}>
                <div>
                    <h3 style={{color:'#ffffff'}}>TMDB Client</h3>
                 </div>
                <div>
                    <VideocamIcon style={{color:'#ffffff', fontSize: 30}}/>
                </div>
            </div>
            <div style={{display:'flex',width:'50%',justifyContent:'space-evenly', alignItems:'center' }}>
                <div>
                <h3 style={{color:'#ffffff'}}>For the movie enthusias !!</h3>
                </div>
                <div>
                <LocalMoviesIcon style={{color:'#ffffff', fontSize: 30}}/>
                </div>
            </div>
        </div>   
    )
}
export default NavbarLeft;
