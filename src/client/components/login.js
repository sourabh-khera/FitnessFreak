/**
 * Created by sourabh on 27/6/17.
 */

import React from "react"
import { Link } from "react-router-dom"
import { authenticateUser } from "../actions/user_actions"
import { connect } from "react-redux";
import Landingpage from "./landingComponent";
import { required, email, noSpace } from '../validators'
import TextInput from './Form/TextInput'
import Alert from "react-alert"

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
           Email: "",
           Password: "",
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth){
            this.props.history.push("/welcome")
        }
    }
    alertOptions = {
      theme:'dark',
      time:3000,
      position:'top right'
    };

    showAlert = (i, value) =>{
        this.alert.show(i+" : "+value,{
            type:'error'
        })
    };
    loginDetails = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    submitLoginDetails = (email,password) => {
        const errors = this.props.errors;
        const errorsList = Object.keys(errors)
            .filter((key) => errors[key] !== null)
            .map((key) => ({ key, message: errors[key]}));

        errorsList.forEach((error) => this.showAlert(error.key, error.message));
        if(errorsList.length)
        {
            return
        }
        this.props.authenticateUser(email,password);

    };
    render() {
        return (
             <div>
                 <Alert ref={ele=>this.alert=ele} {...this.alertOptions}/>
               <Landingpage/>
                <div className="LoginContainer LogRegContainer">
                    <h7>Login</h7>
                    <hr></hr>
                    <label>Email</label>
                    <TextInput
                        type="text"
                        name="Email"
                        placeholder="Enter Your Email"
                        validators={[required, email]}
                        onChange={this.loginDetails}
                    />
                    <label>Password</label>
                    <TextInput
                      type="password"
                      placeholder="Enter Your Password"
                      name="Password"
                      validators={[required, noSpace]}
                      onChange={this.loginDetails}
                    />
                    <button className="login"
                            onClick={() => this.submitLoginDetails(this.state.Email, this.state.Password)}>Login
                    </button>
                    <hr className="bottomHr"></hr>
                    <label>Not a member yet ?</label>
                    <button className="join_us"><Link to="/"> Join us</Link></button>
                </div>
            </div>
        )
    }

}
    const mapDispatchToProps = (dispatch) => ({
       authenticateUser : (email,password) => dispatch(authenticateUser(email,password))
    });

    const mapStateToProps = (state,ownProps) => ({
        auth: state.user.auth,
        errors: state.formValidation.errors,
    });

    export default connect(mapStateToProps,mapDispatchToProps)(Login)

