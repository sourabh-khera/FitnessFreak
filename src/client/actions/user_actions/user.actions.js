/**
 * Created by sourabh on 3/7/17.
 */

import {
    USER_CREATED_SUCCESS,
    USER_CREATED_FAILURE,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILURE,
    USER_EXIST_SUCCESS,
    USER_EXIST_FAILURE,
    USER_EXIST_FALSE
} from "../../constants"

export const createUserSuccess = (created) => {
    return {type: USER_CREATED_SUCCESS,created}
};

export const createUserFailure = (err) => {
    return {type: USER_CREATED_FAILURE, err}
};

export const authenticateUserSuccess = (auth) => {
   return {type:AUTHENTICATE_USER_SUCCESS,auth}
};

export const authenticateUserFailure = (err) => {
    return {type: AUTHENTICATE_USER_FAILURE, err}
};


export const userExistSuccess = (exist) => {
    return {type: USER_EXIST_SUCCESS,exist}
};

export const userExistFailure = (err) => {
    return {type: USER_EXIST_FAILURE, err}
};

export const setExistToFalse = () =>{
    return {type:USER_EXIST_FALSE,value:false}
};