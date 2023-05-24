const connectToMongo = require('../src/connectToMongo')
const mongoose = require('mongoose')

connectToMongo();
const orderSchema = mongoose.Schema({
    orderId: {
        type: 'string',
        required: true,
        unique: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true, 
                ref: "product"
            },
            quantity:{
                type:Number,
                default:1,
                required: true
            },
            price:{
                type:Number,
                required: true

            }

        }
    ],
    totalOrderAmount:{
        type:Number,
        required: true
    },
    discount:{type:Number},
    finalAmount:{type:Number,required: true}
})


const Order = mongoose.model("order",orderSchema)

Order.createIndexes()

module.exports = Order