/**
 * Created by sourabh on 3/7/17.
 */

const userModel = require("./user.model");

exports.userEntry = (email, hash) => {
    return new Promise((resolve, reject) => {
        userModel.create({
                userEmail: email,
                userPassword: hash
            },
            (err, user) => {
                if (err) {
                    reject(err)
                }
                resolve(true)
            }
        )
    })
};


exports.getUserByEmail = (userEmail) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({userEmail}, (err, user) => {
            if (err) {
                reject(err)
            }
            resolve(user)
        })
    })

};
exports.checkUserExist = (userEmail) => {
    return new Promise((resolve,reject) => {
         userModel.findOne({userEmail},(err,user) => {
             if(err){
                 reject(err)
             }
             if(user){
                 resolve(true)
             }
             resolve(false)
         })
    })
};