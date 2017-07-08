/**
 * Created by sourabh on 4/7/17.
 */
import React from "react"
import {Redirect} from "react-router-dom"

const authenticate = (Component) => {
    return class HOC extends React.Component {
        render() {
            const token = localStorage.getItem('token');
            if (token) {
                return (<Component {...this.props}/>)
            } else {
                return (<Redirect to="/"/>)
            }
        }
    }
};
export default authenticate
