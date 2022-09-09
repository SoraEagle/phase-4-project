import React from 'react';
import {Link} from 'react-router-dom';

function NavBar({setCurrentUser}){
    console.log("NavBar.js");
    function handleLogoutClick(){
        fetch("/logout", {method: "DELETE"}).then((r) => {
            console.log("NavBar.js handleLogoutClick");
            debugger;
            if(r.ok) setCurrentUser(null);
        });
        console.log("Log Out");
    }
    return(
        <div id="nav">
            <Link id = "linkStyles" to="/">
                Home
            </Link>
            <Link id = "linkStyles" to="/hotels">
                Hotels
            </Link>
            <Link id = "linkStyles" to="/bookings">
                My Bookings
            </Link>
            <button onClick={handleLogoutClick}>
                Log Out
            </button>
        </div>
    );
}

export default NavBar;