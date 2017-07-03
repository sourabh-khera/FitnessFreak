/**
 * Created by sourabh on 3/7/17.
 */

const userController=require("./user.controller");

 module.exports=(app) => {
     app.post('/api/user/create',userController.createUser);
     app.post('/api/user/auth',userController.authenticateUser)
 };