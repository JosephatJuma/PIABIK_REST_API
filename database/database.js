const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASEPORT,
  connectionLimit: 10, // Adjust the limit as needed
  connectTimeout: 60000,
});

// Get a connection from the pool
const getConnectionFromPool = () => {
  return pool.promise().getConnection();
};

module.exports = getConnectionFromPool;
