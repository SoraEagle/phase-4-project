import React, {useContext} from 'react';
import {BookingsContext} from '../../context/bookingsList';

function Booking({booking, currentUser, booked, setBooked}){
  const {bookings, setBookings} = useContext(BookingsContext);

  function deleteBookings(){
    fetch(`http://localhost:3001/users/${currentUser.id}/bookings/${booking.id}`, {
      method: "DELETE"
    })
    .then((r) => {
      if(r.ok){
        onDeleteBookings(booking.id);
        console.log("bookingId: ", booking.id);
        setBooked(false);
      }
    })
  }

  function onDeleteBookings(deletedBooking){
    const updatedBookings = bookings.filter((booking) => booking.id !== deletedBooking.id);
    setBookings(updatedBookings);
    console.log("New Bookings: ", bookings);
  }

  return(
    <div id='bookings'>
      <p>{booking.hotel.name}</p><p>{booking.hotel.city}</p>
      <button id='bookings_button' key={booking.id} onClick={deleteBookings}>Cancel Booking</button>
      </div>
  );
}

export default Booking;