import React, {useContext, useState} from "react";
import Hotel from "../components/Hotel";
import NewHotel from "../components/Hotels/NewHotel";
import {HotelsContext} from "../context/hotelsList";

function Hotels({currentUser}){
  const {hotels, setHotels} = useContext(HotelsContext);
  // console.log("Hotels output within Hotels.js: ", hotels);
  console.log(currentUser);
  
    return(
        <div>
          <NewHotel /> {/* Form to add Hotels */}
            {/* show component listing each individual Hotel */}
            {(!currentUser) ? (
              <h2>Sorry, looks like we ran into a problem!</h2>
            ) : (
              <div>
                <h2>Feel free to browse our selection of premium hotels:</h2>
                {hotels.map((hotel) => {return <h5 key={hotel.id}><Hotel hotel={hotel} currentUser={currentUser} /></h5>})}
              </div>
            )}
        </div>
    );
}

export default Hotels;