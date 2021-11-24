require("dotenv").config();
const user = "user";
const password = "edenpark";
const database = "mydb";
const port = 3014;

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: user,
  password: password,
  database: database,
  port: port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
