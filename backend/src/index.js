const express = require('express')
const app = express()
const port = 5000
const connectToMongo = require('./connectToMongo')
var cors = require('cors')

connectToMongo();

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/auth', require("../routes/auth.js"))
app.use("/addproduct", require("../routes/addproduct.js"))
app.use("/fetch", require("../routes/sendproducts"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})