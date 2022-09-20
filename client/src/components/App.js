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
  // console.log("App.js");

  const [hotels, setHotels] = useState([]);
  // console.log("App.js Hotels: ", hotels);

  const [booked, setBooked] = useState(false);
  // console.log("App.js Booked: ", booked);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      // console.log("App.js useEffect fetch /me");
      if (r.ok){
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
    fetch("/hotels").then((r) => {
      if(r.ok){
        r.json().then((data) => {
          // console.log("App.js fetch Hotels: ", data);
          setHotels(data);
        })
      }
    })
  }, []);

  if(!currentUser) return(
    <Router>
      <Login onLogin={setCurrentUser} currentUser={currentUser} isLoading={isLoading} setIsLoading={setIsLoading} errors={errors} setErrors={setErrors} />
      <Footer />
    </Router>
  );
  
  return(
    <HotelsProvider><BookingsProvider>
      <Router>
        {currentUser ? <h1>Logged In!</h1> : null}
        <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path={"/"} element={<Home currentUser={currentUser} />} />
          <Route path={"/hotels"} element={<Hotels currentUser={currentUser} 
          errors={errors} setErrors={setErrors} />}
          booked={booked} setBooked={setBooked} errors={errors} setErrors={setErrors} />
          <Route path={"/bookings"} element={<Bookings currentUser={currentUser} errors={errors} setErrors={setErrors} />} />
        </Routes>
        <Footer />
      </Router>
      </BookingsProvider></HotelsProvider>
  );
}

export default App;