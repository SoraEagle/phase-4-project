import React, {useContext} from 'react';
import {BookingsContext} from '../../context/bookingsList';

function Booking({booking, currentUser}){
  const {bookings, setBookings} = useContext(BookingsContext);

  function deleteBookings(){
    fetch(`/users/${currentUser.id}/bookings/${booking.id}`, {
      method: "DELETE"
    })
    .then((r) => {
      if(r.ok){
        onDeleteBookings(booking);
      }
    })
  }

  function onDeleteBookings(deletedBooking){
    const updatedBookings = bookings.filter((booking) => booking.id !== deletedBooking.id);
    setBookings(updatedBookings);
  }

  return(
    <div id='bookings'>
      <p>{booking.hotel.name}</p><p>{booking.hotel.city}</p>
      <button id='bookings_button' onClick={deleteBookings}>Cancel Booking</button>
      </div>
  );
}

export default Booking;