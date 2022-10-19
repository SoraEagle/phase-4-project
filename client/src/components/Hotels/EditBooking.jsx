import React, {useEffect, useState} from 'react';
import {headers} from '../../Globals';

function EditBooking({booking, date, errors, setErrors, onUpdateBooking}){
  const [bookingDate, setBookingDate] = useState(booking.date);

  useEffect(() => {
      booking.date = bookingDate;
      setBookingDate(booking.date);
  }, [bookingDate]);

  function handleDateEdit(e){ // Handle setting the errors in THIS function!!!
    e.preventDefault();

    fetch(`/bookings/${booking.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        date: bookingDate
      }),
    }).then((booking) => {
      booking.json().then((booking) => {
        if(booking.errors)setErrors(booking.errors);
        else{
          setErrors(null);
          onUpdateBooking(booking);
        }
      });
    });
  }
    
  return(
    <div>
      <form onSubmit={handleDateEdit}>
        <label>Start Date: </label>
        <input type="date" name='date' value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
        <input type="submit" value="Save" />
        <div>
          {errors ? (errors.map((err) => (
            <p key={err}>{err}</p>
          ))) : (
            setErrors(null)
          )}
        </div>
      </form>
    </div>
  )
}

export default EditBooking;