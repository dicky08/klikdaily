require('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME:process.env.DB_USERNAME,
  DATABASE:process.env.DATABASE,
  DATE: process.env.DATE
}