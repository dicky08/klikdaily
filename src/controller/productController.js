const {getAllProduct,updateStock, logsProductModel, getLogs, getOneProduct} = require('../model/productModel')

const {responGetAll, responseLog} = require('../helper/response')

 const productController = {
  gettAllProductController: async (req,res) => {
    try {
      const results = await getAllProduct()
      responGetAll(res, results)
    } catch (error) {
      console.log(error.messages);
    }
  },
  getLogsController: async (req,res) => {
    try {
      const id = req.params.location_id
      const result = await getLogs(id)
      const product = await getOneProduct(id)
      const loc_name = product[0].location
      const prod_name = product[0].product
      const qty = product[0].quantity

      const resultData = result.map(e=>{
        const data = {
          id : e.id,
          type: e.type,
          created_at: e.created_at,
          adjustment: e.adjustment,
          quantity: e.quantity
        }
        return data
      })
      responseLog(res, id, loc_name, prod_name, qty, resultData)
    } catch (error) {
      console.log(error.message);      
    }
  },
  adjustmentProductController: async (req,res) => {
    const body = req.body 
    const getProduct = await getAllProduct()
    let faileds = {}
    let dataSuccess1 = []
    let dataSuccess2 = {}
    getProduct.map(m=> {
      body.map(async b=> {
        if (b.location_id === m.id && b.product===m.product) {
          const minus = b.adjustment.toString().slice(0,1);
          if (minus == '-') {
            let updateQty = parseInt(m.quantity) + parseInt(b.adjustment)
            const time = new Date()
            const outBound = {
              loc_id:m.id,
              type: 'Outbond',
              adjustment: b.adjustment,
              quantity: updateQty
            }
            const sucses = {
              status: 'Success',   
              updated_at: time,   
              location_id: b.location_id,  
              location_name: m.location,  
              product: b.product,
              adjustment: b.adjustment,
              stock_quantity: updateQty 

            }
            dataSuccess1 = [...dataSuccess1, sucses]
            const responseMin = {
              status: 'Success',   
              updated_at: time,   
              location_id: b.location_id,  
              location_name: m.location,  
              product: b.product,
              adjustment: b.adjustment,
              stock_quantity: updateQty 
            }
            dataSuccess2 = responseMin
            await updateStock(updateQty,m.id)
            await logsProductModel(outBound)
          }else{
            let updateQty = parseInt(m.quantity) + parseInt(b.adjustment)
            const time = new Date()
            const inBound = {
              loc_id:m.id,
              type: 'Inbound',
              adjustment: b.adjustment,
              quantity: updateQty
            }
            const sucses = {
              status: 'Success',   
              updated_at: time,   
              location_id: b.location_id,  
              location_name: m.location,  
              product: b.product,
              adjustment: b.adjustment,
              stock_quantity: updateQty 

            }
            dataSuccess1 = [...dataSuccess1, sucses]
            const responsePlus = {
              status: 'Success',   
              updated_at:time,   
              location_id: b.location_id,  
              location_name: m.location,  
              product: b.product,
              adjustment: b.adjustment,
              stock_quantity: updateQty 
            }
            dataSuccess2 = responsePlus
            await updateStock(updateQty,m.id)
            await logsProductModel(inBound)
          }
        }else{
          const time = new Date()
          const responseFail = {
            status: 'Failed',   
            error_message: 'Invalid Product',    
            updated_at:time,   
            location_id: b.location_id 
          }
          faileds = responseFail
        }
      })
      return [faileds,dataSuccess1,dataSuccess2]
    })
    if (dataSuccess1.length === 0) {
      res.json({
        msg: 'Not Adjusted'
      })
    }else if( dataSuccess1.length <2) {
      const SucFail = [{...dataSuccess2,faileds}];
      res.json({
        status_code: 200,
        requests: body.length,
        adjusted: dataSuccess1.length,
        results: SucFail
      })
    }else{
      res.json({
        status_code: 200,
        requests: body.length,
        adjusted: dataSuccess1.length,
        results: dataSuccess1
      })
    }
  }
}

module.exports = productController