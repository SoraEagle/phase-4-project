import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HotelsProvider} from "../context/hotelsList";
import './App.css';
import Footer from "./Footer";
import NavBar from "./Navigation/NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";
import Bookings from "../pages/Bookings";

function App(){
  const [currentUser, setCurrentUser] = useState(null);
  console.log("App.js");

  const [hotels, setHotels] = useState([]);
  console.log("Hotels: ", hotels);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      console.log("App.js useEffect fetch /me");
      if (r.ok){
        r.json().then((currentUser) => setCurrentUser(currentUser));
        console.log("App.js currentUser: " + currentUser);
      }
    });
    fetch("/hotels").then((r) => {
      if(r.ok){
        r.json().then((data) => {
          console.log("Hotels: ", data);
          setHotels(data);
        })
      }
    })
  }, []);

  if(!currentUser) return(
    <Router>
      <Login onLogin={setCurrentUser} currentUser={currentUser} />
      <Footer />
    </Router>
  );
  
  return(
    <HotelsProvider>
      <Router>
        {currentUser ? <h1>Logged In!</h1> : null}
        <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path={"/"} element={<Home currentUser={currentUser} />} />
          <Route path={"/hotels"} element={<Hotels currentUser={currentUser} hotels={hotels} setHotels={setHotels} />} />
          <Route path={"/bookings"} element={<Bookings currentUser={currentUser} />} />
        </Routes>
        <Footer />
      </Router>
      </HotelsProvider>
  );
}

export default App;