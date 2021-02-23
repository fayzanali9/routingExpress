const express = require('express')
const router = express.Router()
const tables = require('./tables')

router.route('/')
      .get((req,res) =>{res.send(`furniture section has a ${tables.table} `)});



const table = "table ";
// tried exporting above using module.exports.table
// exports.table = table
//question :what if i want to export both above table value and router
// tried module.exports ={table,router}

module.exports = router;