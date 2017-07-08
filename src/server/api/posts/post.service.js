/**
 * Created by sourabh on 7/7/17.
 */

const postModel=require("./post.model");

exports.postCreation = (postBody) => {
    return new Promise((resolve,reject) => {
        postModel.create({ postBody },(err,post) => {
              if(err){
                  reject(err)
              }

        })
    })

};