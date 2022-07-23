import React, {useEffect, useState} from "react"
import { Switch, Route } from "react-dom";
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";

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
      <div id="content">
        <header className="App-header">
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