/**
 * Created by sourabh on 17/7/17.
 */
import {
    FETCH_EXERCISE_SUCCESS,
    FETCH_EXERCISE_FAILURE,
    FETCH_EXERCISESLIST_SUCCESS,
    FETCH_EXERCISESLIST_FAILURE,
} from "../../constants"

export const fetchExerciseSuccess = (exerciseData) => {
  return {type:FETCH_EXERCISE_SUCCESS,exerciseData}
};

export const fetchExerciseFailure = (error) => {
    return {type:FETCH_EXERCISE_FAILURE,error}
};

export const fetchExercisesListSuccess = (exercisesList) => {
    return {type:FETCH_EXERCISESLIST_SUCCESS,exercisesList}
};

export const fetchExercisesListFailure = (error) => {
    return {type:FETCH_EXERCISESLIST_FAILURE,error}
};