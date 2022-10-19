import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HotelsProvider} from "../context/hotelsList";
import {BookingsProvider} from "../context/bookingsList";
import './App.css';
import Footer from "./Footer";
import NavBar from "./Navigation/NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";
import Bookings from "./Hotels/Bookings";

function App(){
  const [currentUser, setCurrentUser] = useState(null);
  const [booked, setBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [date, setDate] = useState(new Date());
  
  useEffect(() => { // auto-login
    fetch("/me").then((r) => {
      if (r.ok){
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if(!currentUser) return(
    <Router>
      <Login onLogin={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} errors={errors} setErrors={setErrors} />
      <Footer />
    </Router>
  );
  
  return(
    <HotelsProvider><BookingsProvider>
      <Router>
        <div id="App">
          {currentUser ? <h1>Logged In!</h1> : null}
          <NavBar setCurrentUser={setCurrentUser} setErrors={setErrors}/>
          <Routes>
            <Route path={"/"} element={<Home currentUser={currentUser} />} />
            <Route path={"/hotels"} element={<Hotels currentUser={currentUser} 
            errors={errors} setErrors={setErrors} date={date} setDate={setDate} />}
            booked={booked} setBooked={setBooked} errors={errors} setErrors={setErrors} />
            <Route path={"/bookings"} element={<Bookings currentUser={currentUser}
            errors={errors} setErrors={setErrors}date={date} setDate={setDate} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BookingsProvider></HotelsProvider>
  );
}

export default App;