import React from 'react';

function MyHotels(){
  return(
    <div>
        <div>
            <h1>Your Hotels</h1>
            <p>Here you can edit, update, and delete any hotels that you have created on this site.</p>
        </div>
    </div>
  )
}

export default MyHotels;

/*
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. 
This joins table must include a user submittable attribute.
	
    Ideas:
		Date?
		Price per night?


Note: a user should only be able to edit and delete resources if they are logged in AND the creator of that resource. 
	
    Ideas:
		Add another route called "/myhotels" that would be page showing just the hotels THAT USER added,
		where only THAT user could add/delete.
			*Move the "NewHotel.jsx" component to be its own page, add a route for it, have it list
			THAT USER'S hotels, where the Update and Delete buttons would be the ONLY place they 			exist.
				Expand the "Book Now" button into a booking form where stuff is filled out
*/