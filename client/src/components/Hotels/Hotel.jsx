import React, {useContext, useState} from 'react';
import {BookingsContext} from "../../context/bookingsList";
import NewBooking from './NewBooking';

function Hotel({currentUser, hotel, errors, setErrors, date, setDate}){
  const {bookings, setBookings} = useContext(BookingsContext);
  const [isBooking, setIsBooking] = useState(false);

  function postBookings(){
    setIsBooking(true);
  }

  return(
    <div id='hotels'>
        <div>
          <h2 id="text">{hotel.name}</h2><h2 id='text'>{hotel.city}, {hotel.country}</h2>
        </div>

      {isBooking ? (<NewBooking currentUser={currentUser} hotel={hotel} setIsBooking={setIsBooking} 
      bookings={bookings} setBookings={setBookings} errors={errors} setErrors={setErrors} date={date} setDate={setDate} />
      ) : (
        <button id={hotel.id} onClick={postBookings}>Book Now</button>
      )}
      {
        errors ? (errors.map((err) => (
          <label key={err}>{err}</label>
        ))) : (setErrors([]))
      }
    </div>
  );
}

export default Hotel;