/**
 * Created by sourabh on 7/7/17.
 */

const postModel=require("./post.model");

exports.postCreation = (postBody,userId,image) => {
    return new Promise((resolve,reject) => {
        postModel.create({postBody:postBody , postedBy:userId,Image:image},(err,post) => {
              if(err){
                  reject(err)
              }
              resolve(post)

        })
    })

};

exports.populateUserData = () => {
    return new Promise((resolve,reject) => {
         postModel
             .find({})
             .sort({createdAt:-1})
             .populate('postedBy','userEmail')
             .exec((err,posts) => {
                if(err){
                    reject(err)
                }
                resolve(posts)
             })
    })
};