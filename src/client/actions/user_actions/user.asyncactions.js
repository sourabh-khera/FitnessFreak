/**
 * Created by sourabh on 3/7/17.
 */
import {
    createUserSuccess,
    createUserFailure,
    authenticateUserSuccess,
    authenticateUserFailure
} from "./user.actions"


export const createUser=(userDetails)=>{
   console.log("userDetails---",userDetails);
    return (dispatch)=>{
        fetch("http://localhost:3000/api/user/create",{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userDetails)
        })
            .then(response=>response.json())
            .then((data)=>{

                dispatch(createUserSuccess())
            })
            .catch(error=>{
                dispatch(createUserFailure(error))
            })
    }
};

export const authenticateUser = (email,password) => {
    console.log("email---",email,"password---",password);
    return (dispatch) => {
        fetch("http://localhost:3000/api/user/auth",{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email, password})
        })
            .then(response=>response.json())
            .then(data=>{
                localStorage.setItem('token',data.token);
                dispatch(authenticateUserSuccess(data.auth))
            })
            .catch(error=>{
                dispatch(authenticateUserFailure(error))
            })
    }
};