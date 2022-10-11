import React, {useContext, useEffect, useState} from 'react';
import {HotelsContext} from "../../context/hotelsList";
import {BookingsContext} from "../../context/bookingsList";
import EditHotel from './EditHotel';
import {headers} from "../../Globals";
import NewBooking from './NewBooking';

function Hotel({currentUser, hotel, errors, setErrors}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const {hotels, setHotels} = useContext(HotelsContext);
  const [booked, setBooked] = useState();
  const [isBooking, setIsBooking] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  function deleteHotel(){
    fetch(`/hotels/${hotel.id}`, { // DELETE fetch request.
    method: "DELETE"
    })
    .then((r) => { if(r.ok) onDeleteHotel(hotel); })
  }

  function onDeleteHotel(deletedHotel){
    const updatedHotels = hotels.filter((hotel) => hotel.id !== deletedHotel.id);
    setHotels(updatedHotels);
  }

  useEffect(() => {
    if(booked != true && booked != false) setBooked(false);

    bookings.map((booking) => {
      if(booking.hotel.id === hotel.id) setBooked(true);
    })
  }, [bookings]);

  function handleUpdateHotel(updatedHotel){
    setIsEditing(false);
    const updatedHotels = hotels.map((hotel) => hotel.id === updatedHotel.id ? updatedHotel : hotel);
    setHotels(updatedHotels);
  }

  function postBookings(){
    setIsBooking(true);

    const newBooking={
      user_id: (currentUser.id),
      hotel_id: (hotel.id),
      // Add date in!!!
    }
    fetch(`/users/${currentUser.id}/bookings`, { // POST fetch request
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        booking: newBooking
      }),
    }).then((r) => r.json())
    .then((data) => {
      setBookings([...bookings, data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    setBooked(true);
    // setIsBooking(false);
  }

  return(
    <div id='hotels'>
      {isEditing ? (
      <EditHotel hotel={hotel} onUpdateHotel={handleUpdateHotel} />
      ) : (
        <div>
          <h2 id="text">{hotel.name}</h2><h2 id='text'>{hotel.city}, {hotel.country}</h2>
        </div>
      )}

      {isBooking ? (<NewBooking currentUser={currentUser} hotel={hotel} setIsBooking={setIsBooking} bookings={bookings} setBookings={setBookings} />
      ) : (
      <div>
        <button id={hotel.id} onClick={postBookings}>Book Now</button>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Update</button>
        <button id='delete_button' onClick={deleteHotel}>Delete Hotel</button>
      </div>
      )}
      {errors?.map((err) => (
      <label key={err}>{err}</label>
      ))}
    </div>
  );
}

export default Hotel;

/*
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. 
This joins table must include a user submittable attribute.
	
    Ideas:
		  Date

Note: a user should only be able to edit and delete resources if they are logged in AND the creator of that resource. 
	
    Ideas:
      On Booking.jsx:
        Create a form for editing/deleting an Booking
        Edit only the user submittable attribute for Bookings (date or dates)
      On Hotel.jsx:
			  Expand the "Book Now" button into a booking form where stuff is filled out
        Have the User submit a valid date for the Booking
*/