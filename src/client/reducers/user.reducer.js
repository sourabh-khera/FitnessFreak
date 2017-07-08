import {
    USER_CREATED_SUCCESS,
    USER_CREATED_FAILURE,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILURE,
    USER_EXIST_SUCCESS,
    USER_EXIST_FAILURE,
    USER_EXIST_FALSE

} from "../constants"

const userState={
    userData:[],
    auth:"",
    error:null,
    exist:"",
    created:""
};

export default function userReducer (state=userState,action) {
    switch(action.type){

        case USER_CREATED_SUCCESS:{
            return{
                ...state,
                created:action.created,
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
        case USER_EXIST_SUCCESS:{
            return{
                ...state,
                exist:action.exist
            }
        }
        case USER_EXIST_FAILURE:{
            return{
                ...state,
                error:action.err
            }
        }

        case USER_EXIST_FALSE:{
            return{
                ...state,
                exist:action.value
            }
        }


        default:{
            return state
        }

    }
};