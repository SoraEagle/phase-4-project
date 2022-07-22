import React from 'react';
import {NavLink} from 'react-dom';

const linkStyles = {
    border: "2px solid black"
};

function NavBar(){
    return(
        <div id="nav">
            <NavLink style={linkStyles}>
                {/*  */}
            </NavLink>
            <NavLink style={linkStyles}>
                {/*  */}
            </NavLink>
        </div>
    );
}

export default NavBar;