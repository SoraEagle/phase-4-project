import React, {useEffect, useState} from "react"
// import {Route} from "react-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from "../pages/Login";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";

function App(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  
  return(
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;