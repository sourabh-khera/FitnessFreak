/**
 * Created by sourabh on 17/7/17.
 */
import {
    FETCH_EXERCISE_SUCCESS,
     FETCH_EXERCISE_FAILURE
} from "../constants"

const exerciseState={
  exerciseData:[],
    error:null,
};
export const exerciseReducer = (state=exerciseState,action) => {
    switch(action.type){
        case FETCH_EXERCISE_SUCCESS : {
           return {
               ...state,
               exerciseData:action.exerciseData
           }
        }

        case FETCH_EXERCISE_FAILURE : {
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