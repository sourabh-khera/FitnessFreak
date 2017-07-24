import React, { Component } from 'react';
import {BrowserRouter as Router,Route, } from "react-router-dom";
import Welcome from "./components/welcome";
import Login from "./components/login"
import Home from "./components/home";
import SignUp from "./components/signup";
import Menu from "./components/menu";
import Postwrapper from "./components/postWrapper"
import Excercises from "./components/exercises"
import authenticate from "./components/HOC/authenticate"
import Chestworkoutlists from "./components/Chest_Workouts/exercise.lists"
import Backworkoutlists from "./components/Back_workouts/exercise.lists"
import Tricepsworkoutlists from "./components/triceps_workouts/exercise.lists"
import Shoulderworkoutlists from "./components/shoulder_workouts/exercise.lists"
import Bicepsworkoutlists from "./components/biceps_workouts/exercise.lists"
import Legsworkoutlists from "./components/legs_workouts/exercise.lists"
import Instruction from "../client/components/instruction"
import "./css/signup.css"
import "./css/landingPage.css"
import "./css/logregWrapper.css"
import "./css/login.css"
import "./css/welcomePage.css"
import "./css/navbar.css"
import "./css/home.css"
import "./css/createposts.css"
import "./css/Menu.css"
import "./css/excercises.css"
import "./css/workoutlists.css"


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
            <Route path="/postWrapper" component={authenticate(Postwrapper)}/>
            <Route path="/excercises" component={authenticate(Excercises)}/>
            <Route path="/chestworkoutlists" component={authenticate(Chestworkoutlists)}/>
            <Route path="/backworkoutlists" component={authenticate(Backworkoutlists)}/>
            <Route path="/bicepsworkoutlists" component={authenticate(Bicepsworkoutlists)}/>
            <Route path="/tricepsworkoutlists" component={authenticate(Tricepsworkoutlists)}/>
            <Route path="/shoulderworkoutlists" component={authenticate(Shoulderworkoutlists)}/>
            <Route path="/legsworkoutlists" component={authenticate(Legsworkoutlists)}/>
            <Route path="/instruction/:key" component={authenticate(Instruction)} />
        </div>
      </Router>
    )
  }
}

export default App;
