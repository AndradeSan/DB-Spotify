const express = require('express');
const mysqlConnection  = require('mysql');
const router = express.Router();

// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Usuario', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
module.exports = router;
