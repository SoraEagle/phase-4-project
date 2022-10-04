import React, {useContext, useEffect, useState} from 'react';
import {HotelsContext} from "../../context/hotelsList";
import {BookingsContext} from "../../context/bookingsList";
import EditHotel from './EditHotel';
import {headers} from "../../Globals";

function Hotel({currentUser, hotel, errors, setErrors}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState();
  const [isEditing, setIsEditing] = useState(false);
  
  function deleteHotel(){
    fetch(`/hotels/${hotel.id}`, { // DELETE fetch request.
    method: "DELETE"
    })
    .then((r) => {if(r.ok) onDeleteHotel(hotel);})
  }

  function onDeleteHotel(deletedHotel){
    const updatedHotels = hotels.filter((hotel) => hotel.id !== deletedHotel.id);
    setHotels(updatedHotels);
  }

  console.log(`${hotel.name}: Booked:  ${booked}`);

  useEffect(() => {
    if(booked != true && booked != false) setBooked(false);

    bookings.map((booking) => {
      if(booking.hotel.id === hotel.id) setBooked(true);
    })
  }, [bookings]);

  function handleUpdateHotel(updatedHotel){
    setIsEditing(false);
    const updatedHotels = hotels.map((hotel) => hotel.id === updatedHotel.id ? updatedHotel : hotel);
    debugger
    setHotels(updatedHotels);
    console.log("updatedHotel: ", updatedHotel);
  }

  function postBookings(){
    console.log(booked);
    const newBooking={
      user_id: (currentUser.id),
      hotel_id: (hotel.id)
    }
    fetch(`/users/${currentUser.id}/bookings`, { // POST fetch request
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        booking: newBooking
      }),
    }).then((r) => r.json())
    .then((data) => {
      console.log("data: ", data);
      console.log("bookings: ", bookings);
      setBookings([...bookings, data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    setBooked(true);
  }

    let button;
    if(booked === false) button = <button id={hotel.id} onClick={postBookings}>Book Now</button>
    else button = true;

  return(
    <div id='hotels'>
      <div>
        {isEditing ? (
        <EditHotel hotel={hotel} onUpdateHotel={handleUpdateHotel} />
        ) : (
          <div>
            <h2 id="text">{hotel.name}</h2><h2 id='text'>{hotel.city}, {hotel.country}</h2>
          </div>
        )}

        {button}
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Update</button>
        <button onClick={deleteHotel}>Delete</button>
        {errors?.map((err) => (
        <label key={err}>{err}</label>
        ))}
      </div>
    </div>
  );
}

export default Hotel;