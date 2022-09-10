import React, {useState} from "react";
import Hotel from "../components/Hotel";

function Hotels({currentUser, hotels}){

  // Add a form to add Hotels
  // console.log("Hotels output within Hotels.js: ", hotels);
  // console.log(currentUser);
  
    return(
        <div>
            {/* show component listing each individual Hotel */}            
            {
            (!currentUser) ? (
              <h2>Sorry, looks like we ran into a problem!</h2>
            ) : (
              <div>
                <h2>Feel free to browse our selection of premium hotels:</h2>
                {hotels.map((hotel) => {return <h5 key={hotel.id}><Hotel hotel={hotel} currentUser={currentUser} /></h5>})}
              </div>
            )
            }
        </div>
    );
}

export default Hotels;