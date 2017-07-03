/**
 * Created by sourabh on 3/7/17.
 */

const userModel = require("./user.model");

exports.userEntry = (name, email, hash) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({userEmail: email}, (err, user) => {
            if (user) {
                resolve("user Already Exists");
            }
            else {
                userModel.create({
                        userName: name,
                        userEmail: email,
                        userPassword: hash
                    },
                    (err, user) => {
                        if (err) {
                            reject(err)
                        }
                        resolve("user Created")
                    }
                )
            }
        })
    })

};

exports.getUserByEmail = (userEmail) => {
    return new Promise((resolve,reject) => {
        userModel.findOne({userEmail}, (err, user) => {
            if(err) { reject(err) }
            resolve(user)
        })
    })

};