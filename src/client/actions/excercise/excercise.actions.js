/**
 * Created by sourabh on 17/7/17.
 */
import {
    FETCH_EXERCISE_SUCCESS,
    FETCH_EXERCISE_FAILURE,
    FETCH_EXERCISESLIST_SUCCESS,
    FETCH_EXERCISESLIST_FAILURE,
    CLEAR_SCHEDULE_LIST,
    ADD_TO_SCHEDULE_LIST
} from "../../constants"

export const clearScheduleList = () => {
    return { type: CLEAR_SCHEDULE_LIST }
}

export const addToScheduleList = (exercise) => {
    return { type: ADD_TO_SCHEDULE_LIST, exercise }
}

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