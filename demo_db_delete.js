// JavaScript Document
var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "root",
  user: "root",
   password: "yourpassword",
  database: "mydb"
});
 
con.connect(function(err) {
  if (err) throw err;
   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
   con.query(sql, function (err, result) {
     if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
 });