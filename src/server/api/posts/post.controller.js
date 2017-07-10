
const postService = require("./post.service");

exports.createPost = (req, res) => {
    const postbody = req.body.postBody;
    const image=req.body.image;
    console.log("image---------",image);
    const userId = req.userId;
    postService.postCreation(postbody, userId,image)
        .then(
                postService.populateUserData
        )
        .then((posts)=>{
            res.send({posts})
        })
        .catch((error) => {
            res.send(error)
        })
};