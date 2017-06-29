/**
 * Created by sourabh on 28/6/17.
 */
import React from "react"
import {Link} from "react-router-dom"

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="NavContainer">
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/contact">Contact-us</Link></li>
                    <li><Link to="/about">About-us</Link></li>
                </ul>
            </div>
        )
    }
}

//
// <li className="ExerciseList"><Link to="/exercise">Excercise</Link>
//     <ul className="dropdown-content">
//         <li>Chest</li>
//         <li>Abs</li>
//         <li>Shoulder</li>
//         <li>Back</li>
//         <li>Biceps</li>
//         <li>Triceps</li>
//     </ul>
// </li>
// <li><Link to="/gallery">Gallery</Link></li>