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
    <div className="App"
    style={{
      height: "100vh",
      textAlign: "center"
    }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </Router>
      <div id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;