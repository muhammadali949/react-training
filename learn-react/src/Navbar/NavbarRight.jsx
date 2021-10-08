import React from 'react';
import {Link} from 'react-router-dom';
function NavbarRight() {
    return (
        <div>
            <div style={{display:'flex' ,justifyContent:'space-evenly',background:'#404040'}}>
                <div>
                <Link to='/'>
                    <h3 style={{color:'#ffffff'}}>Home</h3>
                </Link>    
                </div>
                <div>
                    <Link to='/favorite'>
                    <h3 style={{color:'#ffffff'}}>Favorites</h3>
                    </Link>
                </div>
                <div>
                    <h3 style={{color:'#ffffff'}}>Upcoming Movies</h3>
                </div>
                <div>
                    <Link to='/search'>
                <h3 style={{color:'#ffffff'}}>Search</h3>
                    </Link>   
                </div>
            </div>
        </div>
    )
}

export default NavbarRight;
