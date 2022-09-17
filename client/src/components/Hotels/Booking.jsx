import React, {useState} from 'react'

function Booking({booking, currentUser}){
  // Create a Delete Button
  function deleteBooking(){}
  // Create a DELETE fetch request
  return(
    <div id='bookings'>
      <p>{currentUser.id}</p><p></p>
      <button onClick={deleteBooking}>Cancel Booking</button>
      </div>
  );
}

export default Booking;