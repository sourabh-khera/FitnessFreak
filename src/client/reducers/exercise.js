/**
 * Created by sourabh on 17/7/17.
 */
import {
    FETCH_EXERCISE_SUCCESS,
     FETCH_EXERCISE_FAILURE,
    FETCH_EXERCISESLIST_SUCCESS,
    FETCH_EXERCISESLIST_FAILURE,
    ADD_TO_SCHEDULE_LIST,
    CLEAR_SCHEDULE_LIST
} from "../constants"

const exerciseState={
    exerciseData:[],
    exercisesList:[],
    selectedExercise: [],
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

        case FETCH_EXERCISESLIST_SUCCESS:{
            return {
                ...state,
                exercisesList: action.exercisesList
            }
        }
        case FETCH_EXERCISESLIST_FAILURE:{
            return {
                ...state,
                error: action.error,
            }
        }
        case CLEAR_SCHEDULE_LIST: {
            return {
                ...state,
                selectedExercise: []
            }
        }
        case ADD_TO_SCHEDULE_LIST: {
            const selectedExercise = state.selectedExercise.slice()
            selectedExercise.push(action.exercise)
            return {
                ...state,
                selectedExercise,
            }
        }
        default:{
            return state
        }
    }

};