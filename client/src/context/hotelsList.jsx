import React, {useEffect, useState} from 'react';

const HotelsContext = React.createContext();

function HotelsProvider({children}){
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch("/hotels")
        .then((r) => r.json())
        .then((data) => setHotels(data));
    }, [setHotels]);

  return(
    <HotelsContext.Provider value={{hotels, setHotels}}>
        {children}
    </HotelsContext.Provider>
  );
}

export {HotelsContext, HotelsProvider};