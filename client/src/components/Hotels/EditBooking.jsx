import React, {useEffect, useState} from 'react';
import {headers} from '../../Globals';

function EditBooking({booking, errors, setErrors, onUpdateBooking}){
    const [bookingDate, setBookingDate] = useState(booking.date);

    useEffect(() => {
        booking.date = bookingDate;
        setBookingDate(booking.date);
    }, [bookingDate]);

    function handleDateEdit(e){
        e.preventDefault();

        fetch(`/bookings/${booking.id}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({
                date: bookingDate
            }),
          })
            .then((r) => r.json())
            .then((data) => {
              onUpdateBooking(data);
            });
    }
  return(
    <div>
        <form onSubmit={handleDateEdit}>
            <label>Start Date: </label>
            <input type="date" name='date' value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
            <input type="submit" value="Save" />
            <div>
                
            </div>
        </form>
    </div>
  )
}

export default EditBooking;