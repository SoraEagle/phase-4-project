import React from 'react'

function Hotel({hotel}){
  return(
    <div id='hotels'>
        {/* Show Hotel info */}
        {/* Display if currentUser has already booked a room in that Hotel... */}
        <p>{hotel.name},{hotel.city}, {hotel.country}</p>
        <button>Book Now</button>
    </div>
  )
}

export default Hotel