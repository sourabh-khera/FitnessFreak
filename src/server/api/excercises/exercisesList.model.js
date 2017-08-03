/**
 * Created by sourabh on 3/8/17.
 */
const Mongoose= require('mongoose');


const ExercisesListSchema= new Mongoose.Schema({
   bodypart:{
       type:String,
   } ,

    listofexercises:{
       type:[String]
    },

},{versionKey:false});

module.exports=Mongoose.model('ExercisesList',ExercisesListSchema);