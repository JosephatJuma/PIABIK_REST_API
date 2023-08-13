const dotenv = require("dotenv");
const mysql = require("mysql2"); //npm i mysql2

dotenv.config();
const database = mysql
  .createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASEPORT,
    connectTimeout: 60000, // Set connection timeout to 60 seconds
  })
  .promise();

module.exports = database;
