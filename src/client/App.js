import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Landingpage from "./components/landingComponent";
import "./css/signup.css"
import "./css/landingPage.css"
import "./css/logregWrapper.css"
import "./css/login.css"
import "./css/welcomePage.css"
import "./css/navbar.css"
import "./css/home.css"
import "./css/createposts.css"
import "./css/Menu.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
             <Landingpage/>
        </div>
         </Router>

    )
  }
}

export default App;
