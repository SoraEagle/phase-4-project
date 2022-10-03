import React, {useContext, useEffect, useState} from 'react';
import {HotelsContext} from "../../context/hotelsList";
import {BookingsContext} from "../../context/bookingsList";
import {headers} from "../../Globals";

function Hotel({currentUser, hotel, errors, setErrors}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState();
  
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

  console.log(`${hotel.name}: Booked:  ${booked}`);

  const booking = bookings.map((booking) => {
    // console.log("Hotel's ID: ", hotel.id);
    return booking;
  });

  useEffect(() => {
    if(booked != true && booked != false) setBooked(false);
    console.log("Booking: ", booking);

    bookings.map((booking) => {
      if(booking.hotel.id === hotel.id) setBooked(true);
    })
  }, []);

  function postBookings(){
    console.log(booked);
    const newBooking={
      user_id: (currentUser.id),
      hotel_id: (hotel.id)
    }
    fetch(`http://localhost:3001/users/${currentUser.id}/bookings`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        booking: newBooking
      }),
    }).then((r) => r.json())
    .then((data) => {
      // debugger
      console.log("data: ", data);
      console.log("bookings: ", bookings);
      setBookings([...bookings, data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    setBooked(true);
  }

  function isBooked(){ // Put into Booking button: disabled={isBooked()? true : false}
    // debugger
    if(booked) return true;
  }

    let button;
    if(booked === false) button = <button id={hotel.id} onClick={postBookings} disabled={isBooked()? true : false}>Book Now</button>
    else button = true;

  return(
    <div id='hotels'>
        <p>{hotel.name}</p><p>{hotel.city}, {hotel.country}</p>
        {button}
        <button onClick={deleteHotel}>Delete</button>
        {errors?.map((err) => (
          <label key={err}>{err}</label>
        ))}
    </div>
  );
}

export default Hotel;