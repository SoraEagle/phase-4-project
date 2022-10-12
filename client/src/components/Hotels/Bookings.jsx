import React, {useContext} from 'react';
import Booking from './Booking';
import {BookingsContext} from '../../context/bookingsList';

function Bookings({currentUser}){
  const {bookings, setBookings} = useContext(BookingsContext); //Use to filter from the current user's bookings ONLY; Should narrow the scope of the search
  // console.log("Bookings.jsx Bookings: ", bookings);
  return(
    <div><h2>My Bookings</h2>
      {bookings.map((booking) => {return <h5 key={booking.id}><Booking booking={booking} currentUser={currentUser} /></h5>})}
    </div>
  );
}

export default Bookings;