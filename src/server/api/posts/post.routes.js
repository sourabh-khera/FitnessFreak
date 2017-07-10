/**
 * Created by sourabh on 7/7/17.
 */
const postController=require("./post.controller");

 module.exports = (app,loggedIn) => {
    app.post("/api/post/create",loggedIn,postController.createPost)
 };