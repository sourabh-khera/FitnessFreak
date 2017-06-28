/**
 * Created by sourabh on 28/6/17.
 */
import React from "react";
import welcomeimage from "../assets/image/img1.png";

export default class Welcome extends React.Component{
    render(){
        return(
            <div className="WelcomeContainer">
                <img src={welcomeimage}/>
                <div className="WelcomeChildContainer">
                    <span>Welcome to</span>
                    <span>Muscle N Fitness</span>
                    <button>Get Started</button>
                </div>
            </div>
        )
    }
}