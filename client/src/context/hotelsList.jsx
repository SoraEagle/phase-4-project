import React, {useEffect, useState} from 'react';

const HotelsContext = React.createContext();

function HotelsProvider({children}){
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch("/hotels") // default GET fetch request to database
        .then((r) => r.json())
        .then((data) => setHotels(data)); // sets hotels
        // console.log("hotelsList.jsx: data: ", hotels);
    }, [setHotels]);

  return(
    <HotelsContext.Provider value={{hotels, setHotels}}>
        {children}
    </HotelsContext.Provider>
  );
}

export {HotelsContext, HotelsProvider};