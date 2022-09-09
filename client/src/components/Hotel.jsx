import React from 'react'

function Hotel() {
  return (
    <div id='hotels'>
        {/* Show Hotel info */}
        <p>{Hotel.name},{Hotel.city}, {Hotel.country}</p>
        <button>Book Now</button>
    </div>
  )
}

export default Hotel