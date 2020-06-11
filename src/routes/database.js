const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
       
    host    :'204.48.30.100',
    user    : 'root',
    password: 'PASSWORD',
    database: 'Spotify'
  
    //multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;