import React, {useContext} from 'react';
import Booking from './Booking';
import {BookingsContext} from '../../context/bookingsList';

function Bookings({currentUser, booked, setBooked}){
  const {bookings, setBookings} = useContext(BookingsContext); //Use to filter from the current user's bookings ONLY; Should narrow the scope of the search
  console.log("Bookings.jsx Bookings: ", bookings);
  return(
    <div><h2>My Bookings</h2>
      {bookings.map((booking) => {return <h5 key={booking.id}><Booking booking={booking} currentUser={currentUser} /></h5>})}
    </div>
  );
}

export default Bookings;

/*
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. 
This joins table must include a user submittable attribute.
	
    Ideas:
		  Date?
      Price per night?

Note: a user should only be able to edit and delete resources if they are logged in AND the creator of that resource. 
	
    Ideas:
      Create a form for creating/editing/deleting Bookings
      Edit only the user submittable attribute for Bookings
			Expand the "Book Now" button into a booking form where stuff is filled out
*/