/**
 * Created by sourabh on 17/7/17.
 */
import {
    fetchExerciseSuccess,
    fetchExerciseFailure
} from "./excercise.actions"

export const fetchExercise = (exerciseName,jwt_token) => {
  return (dispatch) => {
      fetch("http://localhost:3000/api/fetch/exercise?exerciseName="+exerciseName,{
          method:'get',
          headers:{
              'authorization':jwt_token,
          }
      })
          .then(response=>response.json())
          .then(data => {
              dispatch(fetchExerciseSuccess(data.exerciseData))
          })
          .catch(error => {
              dispatch(fetchExerciseFailure(error))
          })
  }
};
