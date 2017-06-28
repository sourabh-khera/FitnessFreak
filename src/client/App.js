import React, { Component } from 'react';
//import {BrowserRouter as Router,Route} from "react-router-dom";
import Landingpage from "./components/landingComponent";
import Welcome from "./components/welcome";
import "./css/signup.css"
import "./css/landingPage.css"
import "./css/logregWrapper.css"
import "./css/login.css"
import "./css/welcomePage.css"

class App extends Component {
  render() {
    return (
        <div>
            <Landingpage/>
            {/*<Welcome/>*/}
        </div>

    )
  }
}

export default App;
