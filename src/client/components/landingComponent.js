/**
 * Created by sourabh on 27/6/17.
 */

import React from "react";
import backgroundImage from "../assets/image/backgroundImage.jpg";
import Logregwrapper from "./logRegWrapper"

export default class Landingpage extends React.Component{
    render(){
        return(
            <div className="LandingContainer">
                <img src={backgroundImage}/>
                <Logregwrapper/>
                <div className="LandingChildContainer">
                    MUSCLE N FITNESS
                </div>
            </div>
        )
    }
}