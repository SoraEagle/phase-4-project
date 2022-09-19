import React, {useContext, useState} from 'react';
import {HotelsContext} from "../../context/hotelsList";
import {BookingsContext} from "../../context/bookingsList";
import {headers} from "../../Globals";

function Hotel({currentUser, hotel, errors, setErrors}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState(false);
  
  function deleteHotel(){
    // debugger
    console.log("Deleting Hotel...");
    fetch(`http://localhost:3001/hotels/${hotel.id}`, { // DELETE fetch request.
    method: "DELETE"
    })
    .then((r) => {
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
    if(booked === true){
      // debugger
      deleteBookings();
      setBooked((booked) => (!booked));
    } else if(booked === false){
      debugger
      currentUser.bookings.push(hotel);
      postBookings();
      setBooked((booked) => (!booked));
      console.log("User's Bookings: ", currentUser.bookings);
      debugger
    }
    
    // console.log("Hotel.jsx Hotel: ", hotel);
    // console.log("Your Bookings: ", bookings);
    console.log("Booked: ", booked);
    // Add hotel to User's Bookings
    debugger
  }

  console.log("hotel.bookings: ", hotel.bookings);

  // Create function to POST bookings
  function postBookings(){
    const newBooking={
      user: (currentUser.id),
      hotelId: (hotel.id),
      name: (hotel.name),
      city: (hotel.city),
      country: (hotel.country)
    }
    debugger
    fetch(`http://localhost:3001/users/${currentUser.id}/bookings`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        // newBooking
        user: (currentUser.id),
        hotelId: (hotel.id),
        name: (hotel.name),
        city: (hotel.city),
        country: (hotel.country)
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
      console.log("Data: ", data);
      setBookings([...bookings, data]);
      console.log("My Bookings: ", bookings);
    })
  }
  
  function deleteBookings(){
    fetch(`http://localhost:3001/users/${currentUser.id}/bookings`, {
      method: "DELETE"
    })
    .then((r) => {
      if(r.ok)onDeleteBookings(currentUser.bookings.booking);
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
        <button onClick={toggleBooking}>{booked ? ("Booked") : ("Book Now")}</button>
        <button onClick={deleteHotel}>Delete</button>
    </div>
  );
}

export default Hotel;