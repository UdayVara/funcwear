const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect('mongodb://localhost:27017/funcwear').
    then(()=>{
        console.log('Connection Established.')
    }).
    catch(()=>{
        console.log('Connection Failed')
    })
}

module.exports = connectToDb