import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(setCurrentUser){
    function handleLogoutClick(){
        fetch("/api/logout", {method: "DELETE"}).then((r) => {
            if(r.ok){
                setCurrentUser(null);
            }
        });
    }
    return(
        <div id="nav">
            <Link id = "linkStyles" to="/">
                Home
            </Link>
            <Link id = "linkStyles" to="/hotels">
                Hotels
            </Link>
            {/* <Link id = "linkStyles" to="/"> */}
                {/* My Bookings */}
            {/* </Link> */}
            <button onClick={handleLogoutClick}>
                Log Out
            </button>
        </div>
    );
}

export default NavBar;