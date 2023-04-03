const mysql = require("mysql2");




const db = mysql.createConnection({
  port: process.env.db_port,
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: "crud_db",
});



db.connect((err) => {
  // connection error
  if (err) throw err;


  console.log("connected with db ...");

});



module.exports = db