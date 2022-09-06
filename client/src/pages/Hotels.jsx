import React from "react";
import Hotel from "../components/Hotel";

function Hotels(){
    return(
        <div>
            <h2>Feel free to browse our selection of premium hotels:</h2>

            {/* show component listing each individual Hotel */}
            <Hotel />

            {/* {(hotels.length === 0)? (
          <div>
          <h1>There are no hotels available!</h1>
          <img src="https://cdn1.vectorstock.com/i/1000x1000/99/50/beach-cartoon-vector-1599950.jpg" alt="null"/>
          </div>
          ) : (
            <div id="hotels">
              {hotels.map((item) => {return <h5 key={item.id}><Item item={item} /></h5>})}
            </div>)} */}
        </div>
    );
}

export default Hotels;