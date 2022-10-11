import React, {useEffect, useState} from 'react';
import {headers} from '../../Globals';

function NewBooking({currentUser, hotel, setIsBooking, bookings, setBookings}){
  const {date, setDate} = useState();
  console.log("Hotel: ", hotel);
  console.log("NewBooking.jsx Date: ", date); // Should start out as undefined

    function handleDateSubmit(e){
      e.preventDefault();

      const newBooking = { // Object to represent the new Booking Object
        userId: (currentUser.id),
        hotelId: (hotel.id),
        date: (date)
      }

      if(e.target.date.value != '' && e.target.date.value != undefined){

        console.log("newBooking: ", newBooking);
        console.log("Date: ", date);
        console.log("e.target.date.value: ", e.target.date.value);

        fetch(`/users/${currentUser.id}/bookings`, { // POST fetch request
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          booking: newBooking
        }),
        }).then((r) => r.json())
        .then((data) => {
          setBookings([...bookings, data]);
          console.log("Bookings: ", bookings);
        })
        .catch((error) => {
          console.error('Error:', error);
        })

        setIsBooking(false);
      } else {console.log("That is not a valid Date!")}
    }

    const handleChange = (e) => { setDate(e.target.date.value); }

  return(
    <div>
        <form onSubmit={handleDateSubmit}>
            <label>Start Date: </label>
            <input type="date" name='date' id='date' onChange={handleChange} /> {/* Make sure to add in name and value attributes!!! */}
            {/* <label>End Date: </label> */}
            {/* <input type="date" id='end_date' onChange={handleChange} /> */}
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default NewBooking;

/*
Create a form to book a date:
  Date (label and input),
  Submit button

Use:
  handleChange,
  handleDateSubmit (should it be one date, or a range of dates (from start date to end date)?),
  An newBooking Object (currentUser.id, hotel.id (and have the CALENDAR add the date!!!))

  console logs to verify values
*/