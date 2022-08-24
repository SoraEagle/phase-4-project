import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from "./Footer";
import NavBar from "./Navigation/NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";

function App(){
  const [user, setUser] = useState(null);

  // const logOutUser = () => {
  //   setUser({});
  //   setLoggedIn(false);
  // }

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  if(!user) return(
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Login />
      <Footer />
    </Router>
  )
  
  return(
      <Router>
        {/* {loggedIn ? <h1>Logged In!</h1> : null} */}
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;