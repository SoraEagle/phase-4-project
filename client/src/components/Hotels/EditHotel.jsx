import React, {useEffect, useState} from 'react';
import {headers} from '../../../src/Globals';

function EditHotel({hotel, onUpdateHotel}){
    const [hotelName, setHotelName] = useState("");
    // const [hotelCity, setHotelCity] = useState(hotel.city);
    // const [hotelCountry, setHotelCountry] = useState(hotel.country);

    // use a useEffect to set hotelName = hotel.name
    useEffect(() => {
      hotel.name = hotelName; // Sets the Hotel object's name to the state of hotelName
      console.log("hotelName: ", hotelName);
      console.log("hotel.name: ", hotel.name); // The current hotel.name for the Hotel object
    }, [hotelName]);
  
    function handleFormSubmit(e){
      e.preventDefault();
      // console.log("hotel.id: ", hotel.id);
      console.log("hotel: ", hotel);
      console.log("hotelName: ", hotelName);
      console.log("e.target.name.value: ", e.target.name.value);
      console.log("hotel.name: ", hotel.name);
      // console.log("hotel.city: ", hotel.city);
      // console.log("hotel.country: ", hotel.country);
      debugger

      const updateHotel = {
        name: (hotelName)
      }

      console.log("updateHotel: ", updateHotel);
  
      fetch(`/hotels/${hotel.id}`, { // PATCH fetch request  is not currently working (404 Not Found)
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        name: hotelName,
        // city: hotelCity,
        // country: hotelCountry
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // debugger
        console.log("data: ", data);
        onUpdateHotel(data);
      });
    }

    const handleChange = (e) => {
      // debugger
      setHotelName(e.target.value);
      hotel.name = hotelName; // Sets the Hotel object's name to the state of hotelName
      console.log("e.target.value: ", e.target.value);
      // console.log(hotelName);
    }
  
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name"
            autoComplete='off' value={hotelName} onChange={handleChange}/>
            {/* <input type="text" name="city"
            autoComplete='off' value={hotelCity} onChange={(e) => setHotelCity(e.target.city.value)} />
            <input type="text" name="country"
            autoComplete='off' value={hotelCountry} onChange={(e) => setHotelCountry(e.target.country.value)} /> */}
            <input type="submit" value="Save" />
        </form>
    );
  }

export default EditHotel;