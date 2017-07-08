/**
 * Created by sourabh on 27/6/17.
 */
import React from "react"
import {Link} from "react-router-dom"
import {createUser, userExist} from "../actions/user_actions"
import {connect} from "react-redux"
import Landingpage from "./landingComponent";
import TextInput from "./Form/TextInput";
import {required, email, noSpace} from "../validators"
import Alert from "react-alert";
import {setExistToFalse} from "../actions/user_actions/user.actions"


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            Password: "",
        }
    }

    alertOptions = {
        theme: 'dark',
        time: 3000,
        position: 'top right'
    };

    signUpDetails = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    userExist = (email) => {
        this.props.userExist(email)
    };

    showAlert = (key, value) => {
        this.alert.show(key + " : " + value, {
            type: 'error'
        })
    };
    userVerified =()=>{
        this.existAlert();
        setTimeout(()=>{
            this.props.history.push("/login")

        },5000)
    };
    existAlert = () =>{
        this.alert.show("user already Exist,You will be redirected to the login page shortly",{
            type:'error'
        })
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.userCreated) {
            this.props.history.push("/login")
        }else if(nextProps.exist){
             this.userVerified();
              this.props.setExistToFalse();
        }
    };

    submitDetails = (userDetails) => {
        const errors = this.props.errors;
        const errorList = Object.keys(errors)
            .filter((key) => errors[key] != null).map((key) => ({
                key, message: errors[key]
            }));

        errorList.forEach((error) => {
            this.showAlert(error.key, error.message)
        });

        if (errorList.length) {
            return
        }
        this.props.createUser(userDetails)
    };

    render() {

        return (
            <div>
                <Landingpage/>
                <Alert ref={ele => this.alert = ele} {...this.alertOptions}/>
                <div className="SignContainer LogRegContainer">
                    <div>
                        <h7>Sign up</h7>
                        <hr></hr>
                        <label>Email</label>
                        <TextInput
                            name="Email"
                            placeholder="Enter Your Email"
                            type="text"
                            validators={[required, email]}
                            onChange={this.signUpDetails}
                            onBlur={() => this.userExist(this.state.Email)}
                        />
                        <label>Password</label>
                        <TextInput
                            name="Password"
                            type="password"
                            validators={[required, noSpace]}
                            onChange={this.signUpDetails}
                            placeholder="Enter Your Password"
                        />
                        <button className="sign_up" onClick={() => this.submitDetails(this.state)}>Sign</button>
                        <hr className="bottomHr"></hr>
                        <label>Already a member ?</label>
                        <button className="login"><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    errors: state.formValidation.errors,
    exist: state.user.exist,
    userCreated: state.user.created,
});

const mapDispatchToProps = (dispatch) => ({
    createUser: (userDetails) => dispatch(createUser(userDetails)),
    userExist: (email) => dispatch(userExist(email)),
    setExistToFalse:()=> dispatch(setExistToFalse())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register)
