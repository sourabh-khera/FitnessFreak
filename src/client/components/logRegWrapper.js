/**
 * Created by sourabh on 27/6/17.
 */
import React from "react"
import Signup from "./signup"
import Login from "./login"
import {BrowserRouter as Router,Route} from "react-router-dom"

export default class Logregwrapper extends React.Component{
    render(){
        return(
            <Router>
                <div className="LogRegContainer">
                    <Route exact path="/" component={Signup}/>
                    <Route exact path="/login" component={Login}/>
                </div>
            </Router>
        )
    }

}