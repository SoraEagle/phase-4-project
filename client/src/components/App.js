import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Login from "../pages/Login";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App(){
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const loginUser = user => {
    if(user){
      setUser(user);
      setLoggedIn(true);
    }else{
      setUser(null);
      setLoggedIn(false);
    }
  }

  const logOutUser = () => {
    setUser({});
    setLoggedIn(false);
  }

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
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} logOutUser={logOutUser} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/hotels"} element={<Hotels loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginUser={loginUser} />} />
          <Route path={"/login"} element={<LoginForm user={user} onLogin={setUser} />} />
          <Route path={"/signup"} element={<SignUpForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginUser={loginUser} />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;