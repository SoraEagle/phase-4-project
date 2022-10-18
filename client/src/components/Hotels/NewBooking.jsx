import React, {useState} from 'react';
import {headers} from '../../Globals';

function NewBooking({currentUser, hotel, setIsBooking, bookings, setBookings, errors, setErrors, date, setDate}){

    function handleDateSubmit(e){
      e.preventDefault();

        const newBooking = { // Object to represent the new Booking Object
          user_id: (currentUser.id),
          hotel_id: (hotel.id),
          date: (date)
        }

        fetch(`/bookings`, { // POST fetch request
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          booking: newBooking
        }),
        }).then((booking) => {
          booking.json().then((booking) => {
            if(booking.errors){
              console.log("booking.errors: ", booking.errors);
              setErrors(booking.errors);
              return errors;
            } else{
              setBookings([...bookings, booking]);
              setErrors(null);
              setIsBooking(false);
            }
          });
        });
    }

    const handleChange = (e) => { setDate(e.target.value); }

  return(
    <div>
        <form onSubmit={handleDateSubmit}>
            <label>Start Date: </label>
            <input type="date" name='date' value={date} id='date' onChange={handleChange} /> {/* Make sure to add in name and value attributes!!! */}
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default NewBooking;