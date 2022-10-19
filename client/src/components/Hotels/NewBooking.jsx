import React from 'react';
import {headers} from '../../Globals';

function NewBooking({currentUser, hotel, setIsBooking, bookings, setBookings, errors, setErrors, date, setDate}){

    function handleDateSubmit(e){
      e.preventDefault();

        const newBooking = {
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
            if(booking.errors) setErrors(booking.errors);
            else{
              setBookings([...bookings, booking]);
              setErrors(null);
              setIsBooking(false);
            }
          });
        });
    }

  return(
    <div>
        <form onSubmit={handleDateSubmit}>
            <label>Start Date: </label>
            <input type="date" name='date' value={date} id='date' onChange={(e) => setDate(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default NewBooking;