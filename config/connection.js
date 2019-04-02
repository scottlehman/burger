var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "27.77.26.207",
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;