/**
 * Created by sourabh on 7/7/17.
 */
const Mongoose = require("mongoose");

const PostSchema=new Mongoose.Schema({
    postBody:{
        type:String
    },
    postedBy:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Image:{
        type:String
    },
    Video:{
        type:String
    }
},{versionKey:false,timestamps:true});

module.exports=Mongoose.model('Post',PostSchema);