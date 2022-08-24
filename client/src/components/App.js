import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from "./Footer";
import NavBar from "./Navigation/NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import LoginForm from "./Authentication/LoginForm";
import SignUpForm from "./Authentication/SignUpForm";

function App(){
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const loginUser = user => {
      setCurrentUser(user);
      setLoggedIn(true);
  }

  const logOutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
  }

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((currentUser) => setCurrentUser(currentUser));
  //     }
  //   });
  // }, []);
  
  return(
      <Router>
        {loggedIn ? <h1>Logged In!</h1> : null}
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} logOutUser={logOutUser} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginUser={loginUser} />} />
          <Route path={"/login"} element={<LoginForm currentUser={currentUser} onLogin={setCurrentUser} />} />
          <Route path={"/signup"} element={<SignUpForm loginUser={loginUser} />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;