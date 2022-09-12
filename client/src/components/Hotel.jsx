import React, {useContext, useState} from 'react';
import {HotelsContext} from "../context/hotelsList";

function Hotel({hotel}){
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState(false);
  
  function deleteHotel(){
    console.log("Deleting Hotel...");
    fetch(`http://localhost:3001/hotels/${hotel.id}`, { // DELETE fetch request.
    method: "DELETE",
})
.then((r) => r.json())
.then(() => onDeleteHotel(hotel)); // Invoke the onDeleteTrip function with this fetch request.
  }

  function onDeleteHotel(deletedHotel){
    const updatedHotels = hotels.filter((hotel) => hotel.id!== deletedHotel.id);
    setHotels(updatedHotels);
    console.log("Hotel.jsx: Hotel has been deleted");
  }

  function toggleBooking(){
    setBooked(!booked);
    console.log("Hotel.jsx Hotel: ", hotel);
    // Add hotel to User's Bookings
  }

  // Create a function to determine if the hotel is booked with the current user
  return(
    <div id='hotels'>
        {/* Display if currentUser has already booked a room in that Hotel... */}
        <p>{hotel.name}</p><p>{hotel.city}, {hotel.country}</p>
        {/* Toggling the Booking button toggles whether currentUser has booked in that Hotel */}
        <button onClick={toggleBooking}>{booked ? ("Booked") : ("Book Now")}</button>
        {/* Allow Hotels to be globally deleted */}
        {/* Test if Button and function work */}
        <button onClick={deleteHotel}>Delete</button>
    </div>
  )
}

export default Hotel