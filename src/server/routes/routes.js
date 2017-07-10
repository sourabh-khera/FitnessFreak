/**
 * Created by sourabh on 27/6/17.
 */

const userRoutes=require("../api/users/user.routes");
const postRoutes=require("../api/posts/post.routes");
const cors=require("cors");
const jwt_token=require("jsonwebtoken");
const loggeIn = (req,res,next) => {
    const token=req.headers.authorization;
    if(token){
        jwt_token.verify(token,process.env.SECRET_KEY,(err,decode)=>{
            if(err){
                res.status(500).send("invalid token");
            }else{
                const decodeData=jwt_token.decode(token);
                 req.userId=decodeData.Id;
                 next();
            }
        })
    }else{
        res.send("plz send the token");
    }
};
module.exports=(app)=>{

    app.use(cors());
    userRoutes(app);
    postRoutes(app,loggeIn)

};
