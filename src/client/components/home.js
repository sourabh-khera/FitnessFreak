/**
 * Created by sourabh on 29/6/17.
 */
import React from "react"
import Navbar from "./navbar"
import {Link} from "react-router-dom"
export default class Home extends React.Component{
    render(){
        return(
            <div className="HomeContainer">
                <div className="HomeHeading">Muscle n Fitness</div>
                 <div className="HomeChildContainer">
                     <Navbar/>
                 </div>
                <div className="women">
                    <button>Women</button>
                </div>
                <div className="men">
                    <button><Link to="/menu">Men</Link></button>
                </div>
                <div className="homeQuote">Eat Clean Train Dirty</div>
            </div>
        )
    }
}