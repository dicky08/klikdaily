const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const product = require('./src/routes/product')
const cors = require('cors')
const {PORT} = require('./src/helper/env.js')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/product', product)

app.listen(PORT, () => {
  console.log(`Running port ${PORT}`);
})