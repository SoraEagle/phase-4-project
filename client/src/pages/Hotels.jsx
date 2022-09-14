import React, {useContext} from "react";
import Hotel from "../components/Hotels/Hotel";
import NewHotel from "../components/Hotels/NewHotel";
import {HotelsContext} from "../context/hotelsList";

function Hotels({currentUser, isLoading, setIsLoading, errors, setErrors}){
  const {hotels, setHotels} = useContext(HotelsContext);
  // console.log("Hotels output within Hotels.jsx: ", hotels);
  console.log("Hotels.jsx currentUser: ", currentUser);
  
  return(
    <div>
      <h2>Create a new Hotel Listing:</h2>
      <NewHotel hotels={hotels} setHotels={setHotels} isLoading={isLoading} setIsLoading={setIsLoading} errors={errors} setErrors={setErrors} /> {/* Form to add Hotels */}
      {(!currentUser) ? (
        <h2>Sorry, looks like we ran into a problem!</h2>
      ) : (
        <div>
          <h2>Or feel free to browse our selection of premium hotels:</h2>
          {hotels.map((hotel) => {return <h5 key={hotel.id} ><Hotel hotel={hotel} currentUser={currentUser} /></h5>})} {/* Component listing all hotels */}
        </div>
      )}
    </div>
  );
}

export default Hotels;