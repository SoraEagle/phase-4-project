import React, {useEffect, useState} from "react"
// import {Route} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
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
          <Route path={"/"} element={<Hotels />}></Route>
        </Routes>
      </Router>
      <div id="content">
        <header className="App-header">
          <Route exact path="/"element={<Hotels />}></Route>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;