import React, {useEffect, useState} from 'react';
import {headers} from '../../../src/Globals';

function EditHotel({hotel, onUpdateHotel}){
    const [hotelName, setHotelName] = useState("");

    useEffect(() => {
      hotel.name = hotelName; // Sets the Hotel object's name to the state of hotelName
      console.log("hotelName: ", hotelName);
      console.log("hotel.name: ", hotel.name); // The current hotel.name for the Hotel object
    }, [hotelName]);
  
    function handleFormSubmit(e){
      e.preventDefault();
      console.log("hotel: ", hotel);
      console.log("hotelName: ", hotelName);
      console.log("e.target.name.value: ", e.target.name.value);
      console.log("hotel.name: ", hotel.name);

      const updateHotel = {
        name: (hotelName)
      }

      console.log("updateHotel: ", updateHotel);
  
      fetch(`/hotels/${hotel.id}`, { // PATCH fetch request  is not currently working (404 Not Found)
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        name: hotelName
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("data: ", data);
        onUpdateHotel(data);
      });
    }

    const handleChange = (e) => {
      setHotelName(e.target.value);
      hotel.name = hotelName; // Sets the Hotel object's name to the state of hotelName
      console.log("e.target.value: ", e.target.value);
    }
  
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name"
            autoComplete='off' value={hotelName} onChange={handleChange}/>
            <input type="submit" value="Save" />
        </form>
    );
  }

export default EditHotel;