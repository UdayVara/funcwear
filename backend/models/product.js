const mongoose = require('mongoose')
const connectToMongo = require('../src/connectToMongo')

connectToMongo();
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,

    },
    category: {
        type: String, 
        required: true
    },
    sizes:[
        {
            type:String,
            required: true
        }
    ]
    
})


const Product = mongoose.model("product", productSchema)
Product.createIndexes();
module.exports = Product