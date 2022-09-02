import React from 'react'

function Hotel() {
  return (
    <div style={{
        paddingBottom: "10px",
        marginBottom: "12px"
    }}>
        {/* Show Hotel info */}
        <h2><a>{{/* Hotel name */}}</a></h2>
        <h2>{Hotel.city}, {Hotel.country}</h2>
    </div>
  )
}

export default Hotel