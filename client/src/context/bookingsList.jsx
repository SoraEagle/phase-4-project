import React, {useEffect, useState} from 'react';

const BookingsContext = React.createContext();

function BookingsProvider({children}){
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch("/me")
        .then((r) => r.json())
        .then((currentUser) => setBookings(currentUser.bookings));
        console.log("bookingsList.jsx currentUser's bookings: ", bookings);
    }, [setBookings]);

  return(
    <BookingsContext.Provider value={{bookings, setBookings}}>
        {children}
    </BookingsContext.Provider>
  )
}

export {BookingsContext, BookingsProvider};