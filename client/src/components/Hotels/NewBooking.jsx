import React, {useState} from 'react';
import {headers} from '../../Globals';

function NewBooking({currentUser, hotel, setIsBooking, bookings, setBookings, errors, setErrors}){
  const [date, setDate] = useState(new Date());

    function handleDateSubmit(e){
      e.preventDefault();

      if(e.target.date.value != '' && e.target.date.value != undefined){
        const newBooking = { // Object to represent the new Booking Object
          user_id: (currentUser.id),
          hotel_id: (hotel.id),
          date: (date)
        }

        console.log("newBooking: ", newBooking);

        console.log("Submitting new Booking!");
        fetch(`/users/${currentUser.id}/bookings`, { // POST fetch request
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          booking: newBooking
        }),
        }).then((r) => {
          if(r.ok) return r.json()
          else r.json().then((err) => {
            setErrors(err.errors);
            console.log(err);
            console.log(errors);
          })
        })
        .then((data) => {
          setBookings([...bookings, data]);
          console.log("Bookings: ", bookings);
        })
        .catch((error) => {
          console.error('Error:', error);
        })

        setIsBooking(false);
      } else console.log("That is not a valid Date!");
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