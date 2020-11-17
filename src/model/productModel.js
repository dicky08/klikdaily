const db = require('../config/db')

const  productModel = {
  getAllProduct: () => {
    return new Promise((resolve,reject) => {
      db.query(`SELECT product.id, product.location,product.quantity, product.product  FROM product`, (err,result) => {
        err?reject(new Error(err.message)): resolve(result)
      })
    })
  },
  getOneProduct: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`SELECT * FROM product WHERE id=${id}`, (err,result) => {
        err?reject(new Error(err.message)): resolve(result)
      })
    })
  },
  getLogs: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`SELECT * FROM logs WHERE location_id=${id} ORDER BY id DESC`, (err,result) => {
        err?reject(new Error(err.message)): resolve(result)
      })
    })
  },
  updateStock: (quantity,id) => {
    return new Promise((resolve,reject) => {
      db.query(`UPDATE product SET
        quantity=${quantity}
        WHERE id=${id}`, (err,result) => {
          err?reject(new Error(err.message)): resolve(result)
        })
    })
  },
  logsProductModel: (data) => {
    return new Promise((resolve,reject) => {
      db.query(`INSERT into logs (location_id,type,adjustment,quantity) VALUES ('${data.loc_id}','${data.type}','${data.adjustment}','${data.quantity}')`, (err,result) => {
        err?reject(new Error(err.message)): resolve(result)
      })
    })
  }
}

module.exports = productModel