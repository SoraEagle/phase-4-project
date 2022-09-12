import React, {useContext, useState} from 'react';
import {headers} from '../../Globals';
import {HotelsContext} from "../../context/hotelsList";

function NewHotel(){
    const {hotels, setHotels} = useContext(HotelsContext);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const newHotel ={ // Variable for the Hotel that is created
        id: (hotels.id),
        name: (name),
        company: (company),
        city: (city),
        country: (country)
    }
    // console.log("newHotel: ", newHotel);

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3001/hotels", {
            method: "POST",
          headers: headers,
          body: JSON.stringify({
            name: name,
            city: city,
            country, country,
            company: company
          }),
        }).then((r) => r.json())
        .then((newHotel) => {
            console.log("Hotels: ", hotels);
            console.log(newHotel);
            setHotels([...hotels, newHotel]);
        });
        setName('');
        setCity('');
        setCountry('');
        setCompany('');
    }

  return(
    <form onSubmit={handleSubmit}>
        <div>
            <label><b>Name &nbsp;</b></label>
            <input type="text" name="name" autoComplete='off' placeholder='La Doce' value={name} onChange={(e) => setName(e.target.value)} />
            <label><b>City &nbsp;</b></label>
            <input type="text" name="city" autoComplete='off' placeholder='San Diego' value={city} onChange={(e) => setCity(e.target.value)} />
            <label><b>Country &nbsp;</b></label>
            <input type="text" name="country" autoComplete='off' placeholder='United States' value={country} onChange={(e) => setCountry(e.target.value)} />
            <label><b>Company &nbsp;</b></label>
            <input type="text" name="company" autoComplete='off' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default NewHotel;