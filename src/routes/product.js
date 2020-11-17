const express = require('express')
const router = express.Router()
const {gettAllProductController, adjustmentProductController, getLogsController} = require('../controller/productController')


router
.get('/klikdaily/stocks', gettAllProductController)
.post('/klikdaily/adjustment', adjustmentProductController)
.get('/klikdaily/logs/:location_id', getLogsController)

module.exports = router