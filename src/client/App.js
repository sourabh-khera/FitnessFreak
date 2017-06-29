import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Landingpage from "./components/landingComponent";
import Welcome from "./components/welcome";
import Navbar from "./components/navbar"
import Home from "./components/home"
import "./css/signup.css"
import "./css/landingPage.css"
import "./css/logregWrapper.css"
import "./css/login.css"
import "./css/welcomePage.css"
import "./css/navbar.css"
import "./css/home.css"
class App extends Component {
  render() {
    return (
        <Router>
        <div>
            {/*<Landingpage/>*/}
            {/*<Welcome/>*/}
            {/*<Navbar/>*/}
            <Home/>
        </div>
        </Router>

    )
  }
}

export default App;
