/**
 * Created by sourabh on 27/6/17.
 */

import React from "react"
import {Link} from "react-router-dom"

export default class Login extends React.Component {
    render() {
        return (
            <div className="LoginContainer">
                <h7>Login</h7>
                <hr></hr>
                <label>Email</label>
                <input type="text" name="userEmail" placeholder="Enter Your Email"/>
                <label>Password</label>
                <input type="password" name="userPassword" placeholder="Enter Your Password"/>
                <button className="login">Login</button>
                <hr className="bottomHr"></hr>
                <label>Not a member yet ?</label>
                <button className="join_us"><Link to="/"> Join us</Link></button>
            </div>
        )
    }


}