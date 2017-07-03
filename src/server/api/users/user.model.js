/**
 * Created by sourabh on 3/7/17.
 */

const Mongoose=require("mongoose");

const UserSchema=new Mongoose.Schema({

    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userPassword:{
        type:String,
        required:true,
    }
},{versionKey:false});

module.exports=Mongoose.model('User',UserSchema);

