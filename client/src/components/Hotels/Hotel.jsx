import React, {useContext, useState} from 'react';
import {HotelsContext} from "../../context/hotelsList";
import {BookingsContext} from "../../context/bookingsList";
import {headers} from "../../Globals";

function Hotel({currentUser, hotel, errors, setErrors}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState(false);

  // console.log("hotel: ", hotel);
  
  function deleteHotel(){
    fetch(`http://localhost:3001/hotels/${hotel.id}`, { // DELETE fetch request.
    method: "DELETE"
    })
    .then((r) => {
      if(r.ok) onDeleteHotel(hotel);
    })
  }

  function onDeleteHotel(deletedHotel){
    const updatedHotels = hotels.filter((hotel) => hotel.id !== deletedHotel.id);
    setHotels(updatedHotels);
  }

  console.log(`${hotel.name}: Booked: `, booked);

  function toggleBooking(e){
    console.log("e.target: ", e.target.id);
    if(booked === true){
      // debugger
      const booking = bookings.find(booking => {return booking.hotel.id == e.target.id});
      console.log("Booking.id: ", booking.id);
      deleteBookings(booking.id);
      // debugger
      setBooked(!booked);
      // debugger
    } else if(booked === false){
      // postBookings();
      setBooked(!booked);
      // debugger
    }
    
    console.log("Your Bookings: ", bookings);
    // debugger
  }

  function postBookings(){
    const newBooking={
      user_id: (currentUser.id),
      hotel_id: (hotel.id)
    }
    console.log("New Booking: ", newBooking);
    // debugger
    fetch(`http://localhost:3001/users/${currentUser.id}/bookings`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        booking: newBooking
      }),
    })
    .then((r) => {
      if(r.ok) return r.json()
      else r.json().then((err) => {
        console.log(err);
        setErrors(err.errors)
      })
    })
    .then((data) => {
      setBookings([...bookings, data]);
    })
  }
  
  function deleteBookings(bookingId){
    fetch(`http://localhost:3001/users/${currentUser.id}/bookings/${bookingId}`, {
      method: "DELETE"
    })
    .then((r) => {
      if(r.ok)onDeleteBookings(bookings.id);
    })
  }

  function onDeleteBookings(deletedBooking){
    const updatedBookings = bookings.filter((booking) => booking.id !== deletedBooking.id);
    setBookings(updatedBookings);
  }

  return(
    <div id='hotels'>
        <p>{hotel.name}</p><p>{hotel.city}, {hotel.country}</p>
        {/* Toggling the Booking button toggles whether currentUser has booked an room in that Hotel */}
        <button id={hotel.id} onClick={toggleBooking}>{booked ? ("Booked") : ("Book Now")}</button>
        <button onClick={deleteHotel}>Delete</button>
    </div>
  );
}

export default Hotel;