const express = require('express');
const router = express.Router();
const product = require("../models/product")


router.post("/", async(req,res) => {
    const {category} =  req.query;
    let products = await product.find({category:category})
    if (products.length > 0) {
        res.send({success:true,products})
    } else {
        res.send({success:false,message:`${category} are currently unavailable`})
    }
})

router.post("/product",async(req,res) => {
    const {id} = req.query
    let fetchproduct = await product.findById(id)
    if (fetchproduct) {
        res.send({success:true,fetchproduct})
    } else {
        res.send({success:false,message:`${id} Does Not exist.`})
    }
})

module.exports  = router