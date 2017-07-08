import React, { Component } from 'react';
import {BrowserRouter as Router,Route, } from "react-router-dom";
import Welcome from "./components/welcome";
import Login from "./components/login"
import Home from "./components/home";
import SignUp from "./components/signup";
import Menu from "./components/menu";
import Createpost from "./components/createposts"
import authenticate from "./components/HOC/authenticate"
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
            <Route exact path="/" component={SignUp}/>
            <Route path='/login' component={Login}/>
            <Route path="/welcome" component={authenticate(Welcome)} />
            <Route path="/home" component={authenticate(Home)}/>
            <Route path="/menu" component={authenticate(Menu)}/>
            <Route path="/createpost" component={authenticate(Createpost)}/>
        </div>
      </Router>
    )
  }
}

export default App;
