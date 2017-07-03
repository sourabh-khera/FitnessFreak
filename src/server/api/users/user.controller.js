/**
 * Created by sourabh on 3/7/17.
 */

const userService = require("./user.service");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");
exports.createUser = (req, res) => {
    const name = req.body.userName;
    const email = req.body.userEmail;
    const password = req.body.userPassword;
    const saltRounds = 5;
    bcrypt.hash(password, saltRounds).then((hash) => {
        userService.userEntry(name, email, hash)
            .then(user => {
                res.send({user})
            })
            .catch(error => {
                res.send(error)
            })
    });
};
exports.authenticateUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = {
        Email: req.query.userEmail,
    };
    userService.getUserByEmail(email)
        .then(user => bcrypt.compare(password, user.userPassword))
        .then(auth => {
            if (auth) {
                const token = jwtToken.sign(user, process.env.SECRET_KEY, {
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
};
