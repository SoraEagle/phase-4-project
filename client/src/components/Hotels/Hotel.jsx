import React, {useContext, useState} from 'react';
import {HotelsContext} from "../../context/hotelsList";

function Hotel({currentUser, hotel}){
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState(false);
  
  function deleteHotel(){
    // debugger
    console.log("Deleting Hotel...");
    fetch(`http://localhost:3001/hotels/${hotel.id}`, { // DELETE fetch request.
    method: "DELETE",
    })
    .then((r) => {
      console.log("Hotel.jsx hotel id: ", hotel.id); // Is undefined for some reason, until page is refreshed
      if(r.ok) onDeleteHotel(hotel);
    })
  }

  function onDeleteHotel(deletedHotel){
    // debugger
    const updatedHotels = hotels.filter((hotel) => hotel.id !== deletedHotel.id);
    setHotels(updatedHotels);
    console.log("Hotel.jsx: Hotel has been deleted");
  }

  function toggleBooking(){
    setBooked(!booked);
    console.log("Hotel.jsx Hotel: ", hotel);
    console.log("Your Bookings: ", currentUser.bookings);
    // Add hotel to User's Bookings
  }

  // Create a function to determine if the hotel is booked with the current user
  return(
    <div id='hotels'>
        <p>{hotel.name}</p><p>{hotel.city}, {hotel.country}</p>
        {/* Toggling the Booking button toggles whether currentUser has booked in that Hotel */}
        <button onClick={toggleBooking}>{booked ? ("Booked") : ("Book Now")}</button>
        {/* Allow Hotels to be globally deleted */}
        <button onClick={deleteHotel}>Delete</button>
    </div>
  );
}

export default Hotel