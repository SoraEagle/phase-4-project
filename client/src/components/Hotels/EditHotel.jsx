import React, {useEffect, useState} from 'react';
import {headers} from '../../../src/Globals';

function EditHotel({hotel, onUpdateHotel}){
    const [hotelName, setHotelName] = useState("");

    useEffect(() => {
      setHotelName(hotel.name);
    }, []);
  
    function handleFormSubmit(e){
      e.preventDefault();

      const updateHotel = {name: (hotelName)}
  
      fetch(`/hotels/${hotel.id}`, { // PATCH fetch request
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        name: hotelName
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        onUpdateHotel(data);
      });
    }

    const handleChange = (e) => { setHotelName(e.target.value); }
  
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name"
            autoComplete='off' value={hotelName} onChange={handleChange}/>
            <input type="submit" value="Save" />
        </form>
    );
  }

export default EditHotel;

/* 
Change name to EditBooking.jsx 
*/