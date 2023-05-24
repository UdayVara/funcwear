var jwt = require('jsonwebtoken')
const User= require('../models/user')
const JWT_SECRET = "y@u c@nn@t hack this site#$"
const checkUser = (req,res,next) => {
    try{
        const userId=jwt.verify(req.headers['auth-token'],JWT_SECRET)
        console.log(userId)
        req.user= userId.id
        next()
    }catch{
        res.status(401).send("Outsiders are not authorized to access this website")
    }

}

module.exports = checkUser