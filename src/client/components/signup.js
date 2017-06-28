/**
 * Created by sourabh on 27/6/17.
 */
import React from "react"
import {Link} from "react-router-dom"

export default class Register extends React.Component {
    render() {
        return (
            <div className="SignContainer">
                <div>
                    <h7>Sign up</h7>
                    <hr></hr>
                    <label>Username</label>
                    <input type="text" name="userName" placeholder="Enter Your Name"/>
                    <label>Email</label>
                    <input type="text" name="userEmail" placeholder="Enter Your Email"/>
                    <label>Password</label>
                    <input type="password" name="userPassword" placeholder="Enter Your Password"/>
                    <button className="sign_up">Sign Up</button>
                    <hr className="bottomHr"></hr>
                    <label>Already a member ?</label>
                    <button className="login"><Link to="/login">Login</Link></button>

                </div>
            </div>
        )
    }

}
