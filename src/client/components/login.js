/**
 * Created by sourabh on 27/6/17.
 */

import React from "react"
import {Link} from "react-router-dom"
import {authenticateUser} from "../actions/user_actions"
import {connect} from "react-redux";
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userEmail: "",
            userPassword: "",
        }
    }

    loginDetails = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    submitLoginDetails = (email,password) => {
       this.props.authenticateUser(email,password);
    };

    render() {
          // if(this.props.auth){
          //     this.props.history.push("/welcome")
          // }
        return (
            <div className="LoginContainer">
                <h7>Login</h7>
                <hr></hr>
                <label>Email</label>
                <input type="text" name="userEmail" placeholder="Enter Your Email"
                       onChange={this.loginDetails}/>
                <label>Password</label>
                <input type="password" name="userPassword" placeholder="Enter Your Password"
                       onChange={this.loginDetails}/>
                <button className="login"
                        onClick={() => this.submitLoginDetails(this.state.userEmail, this.state.userPassword)}>Login
                </button>
                <hr className="bottomHr"></hr>
                <label>Not a member yet ?</label>
                <button className="join_us"><Link to="/"> Join us</Link></button>
            </div>
        )
    }

}
    const mapDispatchToProps = (dispatch) => ({
       authenticateUser : (email,password) => dispatch(authenticateUser(email,password))
    });

    const mapStateToProps = (state) => ({
        auth:state.auth,
    });

    export default connect(mapStateToProps,mapDispatchToProps)(Login)

