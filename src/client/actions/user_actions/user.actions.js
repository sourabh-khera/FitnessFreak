/**
 * Created by sourabh on 3/7/17.
 */

import {
    USER_CREATED_SUCCESS,
    USER_CREATED_FAILURE,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILURE
} from "../../constants"

export const createUserSuccess = () => {
    return {type: USER_CREATED_SUCCESS}
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