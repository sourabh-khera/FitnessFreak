/**
 * Created by sourabh on 27/6/17.
 */
import React from "react"
import {Link} from "react-router-dom"
import {createUser} from "../actions/user_actions"
import {connect} from "react-redux"
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userEmail: "",
            userPassword: "",
        }
    }

    signUpDetails = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    submitDetails = (userDetails) => {
        this.props.createUser(userDetails)
    };

    render() {
        return (
            <div className="SignContainer">
                <div>
                    <h7>Sign up</h7>
                    <hr></hr>
                    <label>Username</label>
                    <input type="text" name="userName" placeholder="Enter Your Name" onChange={this.signUpDetails}/>
                    <label>Email</label>
                    <input type="text" name="userEmail" placeholder="Enter Your Email" onChange={this.signUpDetails}/>
                    <label>Password</label>
                    <input type="password" name="userPassword" placeholder="Enter Your Password"
                           onChange={this.signUpDetails}/>
                    <button className="sign_up" onClick={()=>this.submitDetails(this.state)}><Link to="/login">Sign
                        Up</Link></button>
                    <hr className="bottomHr"></hr>
                    <label>Already a member ?</label>
                    <button className="login"><Link to="/login">Login</Link></button>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    createUser: (userDetails) => dispatch(createUser(userDetails))
});

export default connect(null,mapDispatchToProps)(Register)
