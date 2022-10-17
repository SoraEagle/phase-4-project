import React, {useContext} from "react";
import Hotel from "../components/Hotels/Hotel";
import NewHotel from "../components/Hotels/NewHotel";
import {HotelsContext} from "../context/hotelsList";

function Hotels({currentUser, errors, setErrors, booked, setBooked}){
  const {hotels, setHotels} = useContext(HotelsContext);
  
  return(
    <div id="hotels">
      <NewHotel hotels={hotels} setHotels={setHotels} errors={errors} setErrors={setErrors} />
      {(!currentUser) ? (
        <h2>Sorry, looks like we ran into a problem!</h2>
      ) : (
        <div id="hotels">
          <h2>Feel free to browse our selection of premium hotels:</h2>
          {hotels.map((hotel) => {return <h5 key={hotel.id} ><Hotel hotel={hotel} currentUser={currentUser} booked={booked} setBooked={setBooked}
          errors={errors} setErrors={setErrors} /></h5>})}
        </div>
      )}
    </div>
  );
}

export default Hotels;