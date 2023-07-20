const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.POSTGRES_DATABASE_USER_NAME,
  host: process.env.POSTGRES_DATABASE_HOST_NAME,
  database: process.env.POSTGRES_DATABASE_NAME,
  password: process.env.POSTGRES_DATABASE_PASSWORD,
  port: process.env.POSTGRES_DATABASE_PORT_NUMBER,
})
module.exports = pool
