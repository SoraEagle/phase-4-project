import React, {useState} from 'react';
import {headers} from '../../Globals';

function NewHotel({currentUser, hotels, setHotels, errors, setErrors}){
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // console.log("user's bookings: ", currentUser.bookings);

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const newHotel ={ // Variable for the Hotel that is created
          name: (name),
          company: (company),
          city: (city),
          country: (country)
        }

        console.log(newHotel);

        fetch("/hotels", {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            name,
            city,
            country,
            company
          }),
        })
        .then((r) => {
          setIsLoading(false);
          if(r.ok) return r.json()
          else r.json().then((err) => {
            console.log(err);
            setErrors(err.errors)
          })
        })
        .then((data) => {
          console.log("newHotel: ", newHotel);
            setHotels([...hotels, data]);
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
        <button type='submit'>{isLoading ? "Loading..." : "Submit"}</button>
        {errors?.map((err) => (
                        <label key={err}>{err}</label>
                    ))}
    </form>
  )
}

export default NewHotel;

/*
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. 
This joins table must include a user submittable attribute.
	
    Ideas:
		  Date

Note: a user should only be able to edit and delete resources if they are logged in AND the creator of that resource.
  (Delete NewHotel.jsx???)
	
    Ideas:
      Create a form for creating/editing/deleting Bookings
      Edit only the user submittable attribute for Bookings
			Expand the "Book Now" button into a booking form where stuff is filled out
*/