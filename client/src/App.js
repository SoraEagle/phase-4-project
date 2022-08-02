import React, {useEffect, useState} from "react"
// import {Route} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";

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
  
  return(
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;