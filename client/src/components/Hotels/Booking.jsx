import React, {useContext, useState} from 'react';
import {BookingsContext} from '../../context/bookingsList';
import EditBooking from './EditBooking';

function Booking({booking, currentUser, date, setDate, errors, setErrors}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleUpdateBooking(updatedBooking){
    setIsEditing(false);
    const updatedBookings = bookings.map((booking) => booking.id === updatedBooking.id ? updatedBooking : booking);
    setBookings(updatedBookings);
  }

  function deleteBookings(){
    fetch(`/bookings/${booking.id}`, {
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
    <div id='booking'>
      {isEditing ? (
        <EditBooking booking={booking} bookings={bookings} setBookings={setBookings} currentUser={currentUser} isEditing={isEditing} 
        setIsEditing={setIsEditing} date={date} setDate={setDate} errors={errors} setErrors={setErrors} onUpdateBooking={handleUpdateBooking} />
      ) : (
        <div>
          <p>{booking.hotel.name}</p>
          <p>{booking.hotel.city}</p>
          <p>When: {booking.date}</p>
        </div>
      )}
      <button id={booking.id} onClick={() => setIsEditing((isEditing) => !isEditing)}>Update</button>
      <button id='delete_button' onClick={deleteBookings}>Cancel Booking</button>
      </div>
  );
}

export default Booking;