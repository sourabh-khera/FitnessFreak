/**
 * Created by sourabh on 27/6/17.
 */

const userRoutes=require("../api/users/user.routes");
const cors=require("cors");
module.exports=(app)=>{

    app.use(cors());
    userRoutes(app);
};
