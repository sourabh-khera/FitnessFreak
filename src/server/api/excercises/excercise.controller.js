/**
 * Created by sourabh on 16/7/17.
 */
const exerciseService = require("./excercise.service");


exports.fetchExercise = (req,res) => {
   const exerciseName=req.query.exerciseName;
   console.log(exerciseName)

   exerciseService.getExerciseData(exerciseName)
       .then(exerciseData => {
           res.send({exerciseData})
       })
       .catch(error => {
           res.send(error)
       })
};