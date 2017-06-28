/**
 * Created by sourabh on 27/6/17.
 */
const express=require('express');

const app=express();

const PORT=3000;

app.listen(PORT,()=>{
   console.log("server is listening on port number:"+PORT)
});