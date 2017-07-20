/**
 * Created by sourabh on 16/7/17.
 */
const exerciseModel = require("./exercise.model");

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