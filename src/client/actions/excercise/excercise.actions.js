/**
 * Created by sourabh on 17/7/17.
 */
import {
    FETCH_EXERCISE_SUCCESS,
    FETCH_EXERCISE_FAILURE
} from "../../constants"

export const fetchExerciseSuccess = (exerciseData) => {
  return {type:FETCH_EXERCISE_SUCCESS,exerciseData}
};

export const fetchExerciseFailure = (error) => {
    return {type:FETCH_EXERCISE_FAILURE,error}
};