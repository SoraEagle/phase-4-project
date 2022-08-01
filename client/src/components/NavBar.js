import React from 'react';
import {NavLink} from 'react-dom';

const linkStyles = {
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
                {/*  */}
            </NavLink>
            <NavLink style={linkStyles} to="/">
                {/*  */}
            </NavLink>
            <button onClick={handleLogoutClick}>
                Log Out
            </button>
        </div>
    );
}

export default NavBar;