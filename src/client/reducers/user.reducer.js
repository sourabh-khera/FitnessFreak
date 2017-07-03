/**
 * Created by sourabh on 3/7/17.
 */
/**
 * Created by sourabh on 3/7/17.
 */
import {
    USER_CREATED_SUCCESS,
    USER_CREATED_FAILURE,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILURE

} from "../constants"

const userState={
    userData:[],
    auth:"",
    error:null,
};

export const userReducer=(state=userState,action)=>{
    switch(action.type){

        case USER_CREATED_SUCCESS:{
            return{
                ...state,
            }
        }
        case USER_CREATED_FAILURE:{
            return{
                ...state,
                error:action.err
            }
        }

        case AUTHENTICATE_USER_SUCCESS:{
            return{
                ...state,
                auth:action.auth
            }
        }
        case AUTHENTICATE_USER_FAILURE:{
            return{
                ...state,
                error:action.error
            }
        }

        default:{
            return state
        }

    }
};