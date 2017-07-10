/**
 * Created by sourabh on 3/7/17.
 */

const userService = require("./user.service");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");
exports.createUser = (req, res) => {
    const email = req.body.Email;
    const password = req.body.Password;
    const saltRounds = 5;
    bcrypt.hash(password, saltRounds).then((hash) => {
        userService.userEntry(email, hash)
            .then((created) => {
                console.log("created---------", created)
                res.send({created})
            })
            .catch(error => {
                res.send(error)
            })
    });
};
exports.authenticateUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let userId;
    userService.getUserByEmail(email)
        .then(user => {
            userId = user._id;
            bcrypt.compare(password, user.userPassword).then(auth => {
                if (auth) {
                    const userClaim = {
                        Email: email,
                        Id: userId,
                    };
                    const token = jwtToken.sign(userClaim, process.env.SECRET_KEY, {
                        expiresIn: 5000,
                    });
                    res.json({
                        token: token,
                        auth: auth,
                    })
                } else {
                    res.json({auth: false})
                }
            })
        }).catch(error => {
        res.send(error)
    })

};

exports.checkUserPresence = (req, res) => {
    const email = req.query.Email;
    userService.checkUserExist(email)
        .then(exist => {
            res.send({exist})
        })
        .catch(error => {
            res.send(error)
        })
};