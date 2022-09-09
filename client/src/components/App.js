import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      console.log("App.js useEffect fetch /me");
      if (r.ok){
        r.json().then((currentUser) => setCurrentUser(currentUser));
        console.log("App.js currentUser: " + currentUser);
      }
    });
  }, []);

  if(!currentUser) return(
    <Router>
      <Login onLogin={setCurrentUser} currentUser={currentUser} />
      <Footer />
    </Router>
  );
  
  return(
      <Router>
        {currentUser ? <h1>Logged In!</h1> : null}
        <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels />} />
          <Route path={"/bookings"} element={<Bookings />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;