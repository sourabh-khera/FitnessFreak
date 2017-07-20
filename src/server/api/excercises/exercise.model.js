/**
 * Created by sourabh on 16/7/17.
 */
const Mongoose=require("mongoose");

const ExerciseSchema=new Mongoose.Schema({
   exerciseName:{
       type:String,
   },
    instructions:{
       type:String,
    },
    videoUrl:{
       type:String,
    }
},{versionKey:false});

module.exports=Mongoose.model('exercise',ExerciseSchema);