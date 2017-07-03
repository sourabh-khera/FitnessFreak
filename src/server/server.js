/**
 * Created by sourabh on 27/6/17.
 */
const express=require('express');
const routes=require("./routes/routes");
require("./configurations/datasource");
const bodyParser=require("body-parser");
const jwtToken=require("jsonwebtoken");
const app=express();
app.use(bodyParser());

process.env.SECRET_KEY="NothingIsImpossible";
routes(app);
const PORT=3000;

app.listen(PORT,()=>{
   console.log("server is listening on port number:"+PORT)
});