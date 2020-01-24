var mysql = require("mysql");
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if(process.env.JAWSDB_URL){
  console.log("going to the internet.")
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log ("going local");
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});
}
var sequelize = new Sequelize("burgers_db", "root", "password", {
  host: "ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: false
},
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;