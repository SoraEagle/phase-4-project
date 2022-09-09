import React, {useEffect, useState} from "react";
import Hotel from "../components/Hotel";

function Hotels(){
  const {hotels, setHotels} = useState([]);

  useEffect(() => {
    fetch("/hotels")
    .then((r) => r.json())
    // .then((info) => console.log("info from fetch within Hotels.js", info));
    .then(setHotels);
    console.log("Hotels.jsx hotels: " + hotels);
  }, []);
  console.log("Hotels output within Hotels.js: ", hotels)
  
    return(
        <div>
            <h2>Feel free to browse our selection of premium hotels:</h2>

            {/* show component listing each individual Hotel */}            
            {
            // (hotels.length === 0) ? (
            //   <h2>Sorry, looks like we ran into a problem!</h2>
            // ) : (
            //   <div>
            //     {/* {hotels.map((hotel) => {return <h5 key={hotel.id}><Hotel /></h5>})} */}
            //   </div>
            // )
            }
        </div>
    );
}

export default Hotels;