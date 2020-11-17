const response = {
  responGetAll: (res,stocks) => {
    const result = {
      status_code: 200,
      status_message: "Success",
      stocks
    }
    res.json(result)
  },
  responseLog: (res,location_id,location_name,product,current_qty,logs) => {
    const result = {
      status_code: 200,
      status: "Success, logs found",
      location_id,
      location_name,
      product,
      current_qty,
      logs
    }
    res.json(result)
  }
}

module.exports = response