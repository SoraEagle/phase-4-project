import React, {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from "./Footer";
import NavBar from "./Navigation/NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";

function App(){
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((currentUser) => setCurrentUser(currentUser));
  //     }
  //   });
  // }, []);

  if(!currentUser) return(
    <Router>
      <NavBar setCurrentUser={setCurrentUser} />
      <Login onLogin={setCurrentUser} currentUser={currentUser} />
      <Footer />
    </Router>
  );
  
  return(
      <Router>
        {/* {loggedIn ? <h1>Logged In!</h1> : null} */}
        <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;