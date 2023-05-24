const express = require('express')
const router = express.Router();
const Product = require('../models/product')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {

        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

router.post("/", async (req, res) => {
    // {res.send(req.file.path)
    // res.send(req.body)
    console.log(req.body)
    var newProduct = await Product.create({
        productName: req.body.productname,
        productImage: req.body.imagelink,
        price: req.body.mrp,
        discount: req.body.discount,
        stock: 100,
        description: req.body.description,
        category: req.body.category,
        sizes:req.body.sizes
    })
        
        if(newProduct) {
            res.send({success:true, message: "Added successfully",newProduct })
        }else{
            res.send({ message: "Failed to add product" });
        }
    }

)

module.exports = router