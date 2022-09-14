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
      console.log("Hotel.jsx hotel id: ", hotel.id);
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
    // console.log("Booked: ", booked);
    if(!booked){
      currentUser.bookings.push(hotel);
      setBooked((booked) => (!booked));
      console.log("Booked: ", booked);
    } else{
      // Use .filter to remove hotel from currentUser.bookings
      setBooked((booked) => (!booked));
      console.log(currentUser.bookings);
      console.log("Booked: ", booked);
    }
    // else currentUser.bookings = currentUser.bookings.filter((hotel) => )
    console.log("Hotel.jsx Hotel: ", hotel);
    console.log("Your Bookings: ", currentUser.bookings);
    // Add hotel to User's Bookings
  }

  return(
    <div id='hotels'>
        <p>{hotel.name}</p><p>{hotel.city}, {hotel.country}</p>
        {/* Toggling the Booking button toggles whether currentUser has booked an room in that Hotel */}
        <button onClick={toggleBooking}>{booked ? ("Booked") : ("Book Now")}</button>
        <button onClick={deleteHotel}>Delete</button>
    </div>
  );
}

export default Hotel;