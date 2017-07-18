/**
 * Created by sourabh on 16/7/17.
 */

const exerciseController = require("./excercise.controller");

module.exports=(app,loggedIn) => {
   app.get("/api/fetch/exercise",loggedIn,exerciseController.fetchExercise);
};