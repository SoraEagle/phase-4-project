import React, {useContext, useState} from 'react';
import {BookingsContext} from '../../context/bookingsList';

function Booking({booking, currentUser}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const [isEditing, setIsEditing] = useState(false);

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
    <div id='booking'>
      <p>{booking.hotel.name}</p><p>{booking.hotel.city}</p>
      <button>Update</button>
      <button id='delete_button' onClick={deleteBookings}>Cancel Booking</button>
      </div>
  );
}

export default Booking;

/*
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. 
This joins table must include a user submittable attribute.
	
    Ideas:
		  Date?
      Price per night?

Note: a user should only be able to edit and delete resources if they are logged in AND the creator of that resource. 
	
    Ideas:
      On Booking.jsx:
        Create a form for editing/deleting an Booking
        Edit only the user submittable attribute for Bookings (date or dates)
      On Hotel.jsx:
			  Expand the "Book Now" button into a booking form where stuff is filled out
        Have the User submit a valid date for the Booking
*/