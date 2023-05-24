const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/user")
var jwt = require('jsonwebtoken');
const JWT_SECRET = "y@u c@nn@t hack this site#$"
const checkUser = require('../middleware/checkUser')
const bcrypt = require("bcrypt")
const saltRounds = 10;
router.post('/signup', body('username', "username must be of 6 characters").isLength({ min: 6 }),
    body('email', "must be an email").isEmail(),
    body('password', 'password must be atleast of 8 characters').isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send(errors)
        }
        else {
            // let newUser=User.create({username:req.body.username,email:req.body.email,password:req.body.password})
            let oldUser = await User.findOne({ email: req.body.email })
            if (oldUser) {
                return res.status(400).send({ success: false, message: `User with ${req.body.email} already exists.` })
            } else {
                const myPlaintextPassword = req.body.password;
                const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds)
                let newUser = await User.create({ username: req.body.username, email: req.body.email, password: hashedPassword })
                let jwtToken = jwt.sign({ id: newUser._id }, "y@u c@nn@t hack this site#$")
                return res.status(200).send({ success: true, message: `New user ${req.body.username} created successfully`, authToken: jwtToken })
            }
        }
    })


router.post('/login',
    body('email', "must be an email").isEmail(),
    body('password', 'password must be atleast of 8 characters').isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send(errors)
        } else {

            let checkUser = await User.findOne({ email: req.body.email })
            // console.log(checkUser)
            if (checkUser) {
                let checkPassword = await bcrypt.compare(req.body.password, checkUser.password)
                if (checkPassword) {
                    let token = jwt.sign({ id: checkUser._id }, "y@u c@nn@t hack this site#$")
                    res.status(200).send({ success: true, authtoken: token })
                } else {
                    res.status(402).send({ success: false, message: "Invalid Password" })
                }

            } else {
                res.status(402).send({ success: false, message: "User with this Email Address Does not Exist." })
            }

        }
    })


router.post("/validate", checkUser, (req, res) => {
    res.send(req.user)
})
module.exports = router

