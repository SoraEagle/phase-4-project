import React, {useEffect, useState} from 'react';
import {headers} from '../../Globals';

function EditBooking({booking, bookings, setBookings, currentUser, isEditing, setIsEditing, errors, setErrors, onUpdateBooking}){
    const [bookingDate, setBookingDate] = useState(booking.date);

    useEffect(() => {
        booking.date = bookingDate;
        setBookingDate(booking.date);
        console.log("bookingDate: ", bookingDate);
        console.log("booking: ", booking);
    }, [bookingDate]);

    function handleDateEdit(e){
        e.preventDefault();

        console.log("e.target.date.value: ", e.target.date.value);

        fetch(`/bookings/${booking.id}`, { // PATCH fetch request currently isn't working (unexpected end of JSON input)
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({
                date: bookingDate
            }),
          })
            .then((r) => r.json())
            .then((data) => {
              debugger
              console.log("data: ", data);
              onUpdateBooking(data);
            });
    }
  return(
    <div>
        <form onSubmit={handleDateEdit}>
            <label>Start Date: </label>
            <input type="date" name='date' value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
            <input type="submit" value="Save" />
        </form>
    </div>
  )
}

export default EditBooking;

/*
    Create the ability to edit the date
*/