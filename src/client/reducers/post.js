/**
 * Created by sourabh on 10/7/17.
 */
import {
    POST_CREATED_SUCCESS,
    POST_CREATED_FAILURE
} from "../constants"

const postState = {
  post : [],
   error:null,
};
export const postReducer = (state=postState,action) => {
    switch (action.type){
        case POST_CREATED_SUCCESS:{
            return {
                ...state,
                post:action.post
            }
        }
        case POST_CREATED_FAILURE:{
            return {
                ...state,
                error:action.error,
            }
        }
        default:{
            return state
        }
    }
};