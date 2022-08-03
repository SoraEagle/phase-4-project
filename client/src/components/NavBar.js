import React from 'react';
import {NavLink} from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    margin: "0px 30px 60px",
    textDecoration: "underline",
    border: "2px solid black"
};

function NavBar(user, setUser){
    function handleLogoutClick(){
        fetch("/api/logout", {method: "DELETE"}).then((r) => {
            if(r.ok){
                setUser(null);
            }
        });
    }
    return(
        <div id="nav">
            <NavLink style={linkStyles} to="/">
                Home
            </NavLink>
            <NavLink style={linkStyles} to="/hotels">
                Hotels
            </NavLink>
            {/* <NavLink style={linkStyles} to="/"> */}
                {/* My Bookings */}
            {/* </NavLink> */}
            <button onClick={handleLogoutClick}>
                Log Out
            </button>
        </div>
    );
}

export default NavBar;