const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  // host: "darek@localhost",
  user: "root",
  database: "nodecomplete",
  // password: '',
  password: "darek200180",
});

module.exports = pool.promise();
