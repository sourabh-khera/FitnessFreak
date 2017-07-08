/**
 * Created by sourabh on 7/7/17.
 */

const postService=require("./post.service");

exports.createPost = (req,res) => {
  const postbody=req.body.postData;
   postService.postCreation(postbody)
       .then((post)=>{
          res.send({post})
       })
       .catch((error)=>{
       res.send(error)
       })
};