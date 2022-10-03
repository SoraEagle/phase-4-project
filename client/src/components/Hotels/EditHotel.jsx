import React, {useState} from 'react'

function EditHotel({hotel, onUpdateHotel}){
    const [hotelName, setHotelName] = useState(hotel.name);
    const [hotelCity, setHotelCity] = useState(hotel.city);
    const [hotelCountry, setHotelCountry] = useState(hotel.country);
  
    function handleFormSubmit(e){
      e.preventDefault();
  
        fetch(`http://localhost:3001/hotels/${hotel.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: hotelName,
        city: hotelCity,
        country: hotelCountry
      }),
    })
      .then((r) => r.json())
      .then((updatedName) => onUpdateHotel(updatedName));
    }
  
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" 
            autoComplete='off' value={hotelName} onChange={(e) => setHotelName(e.target.value)}/>
            <input type="text" name="city"
            autoComplete='off' value={hotelCity} onChange={(e) => setHotelCity(e.target.value)} />
            <input type="text" name="country"
            autoComplete='off' value={hotelCountry} onChange={(e) => setHotelCountry(e.target.value)} />
                
            <input type="submit" value="Save" />
        </form>
    );
  }

export default EditHotel;