/**
 * Created by sourabh on 27/6/17.
 */
import React from "react"
import Signup from "./signup"

import Welcome from "./welcome";
import {BrowserRouter as Router,Route} from "react-router-dom"

export default class Logregwrapper extends React.Component{
    render(){
        return(
                <div className="LogRegContainer">
                    <Route exact path="/" component={Signup}/>
                </div>
        )
    }

}