/**
 * Created by sourabh on 28/6/17.
 */
import React from "react";
import welcomeimage from "../assets/image/img1.png";
import {Link} from "react-router-dom";


export default class Welcome extends React.Component{


    render(){
        console.log("inside welcome page--")
        return(
            <div className="WelcomeContainer">
                <img src={welcomeimage}/>
                <div className="WelcomeChildContainer">
                    <span>Welcome to</span>
                    <span>Muscle N Fitness</span>
                    <button><Link to="/home">Get Started</Link></button>
                </div>
            </div>
        )
    }
}