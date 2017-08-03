/**
 * Created by sourabh on 16/7/17.
 */
const exerciseModel = require("./exercise.model");
const exercisesListModel=require("./exercisesList.model");

exports.getExerciseData = (exerciseName) => {
    return new Promise((resolve, reject) => {
        exerciseModel.find({exerciseName: exerciseName}, (err, exerciseData) => {
            if (err) {
                reject(err)
            }
            resolve(exerciseData)
        })
    })
};

exports.getExercisesList = (bodypart) => {
  return new Promise( (resolve,reject) => {
      exercisesListModel.find({bodypart},(err,list) => {
          if(err){
              reject(err)
          }
          resolve(list)
      })
  })
};