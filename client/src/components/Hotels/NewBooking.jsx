import React from 'react';

function NewBooking({currentUser, hotel}){

    function handleDateSubmit(e){
        e.preventDefault();

        const newBooking = { // Object to represent the new Booking Object
            userId: (currentUser.id),
            hotelId: (hotel.id)
        }

        console.log("newBooking: ", newBooking);

        // fetch(`/users/${currentUser.id}/bookings`, { // POST fetch request
        //   method: "POST",
        //   headers: headers,
        //   body: JSON.stringify({
        //     booking: newBooking
        //   }),
        // }).then((r) => r.json())
        // .then((data) => {
        //   setBookings([...bookings, data]);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // })
    }

    const handleChange = (e) => {}

  return(
    <div>
        <form onSubmit={handleDateSubmit}>
            <label>Start Date: </label>
            <input type="date" id='start_date' onChange={handleChange} /> Make sure to add in name and value attributes!!!
            <label>End Date: </label>
            <input type="date" id='end_date' onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default NewBooking;

/*
Create a calendar form:
  Start Date (label and input),
  End Date (label and input),
  Submit button

Use:
  handleChange,
  handleDateSubmit (should it be one date, or a range of dates (from start date to end date)?),
  An newBooking Object (currentUser.id, hotel.id (and have the CALENDAR add the date!!!))
*/