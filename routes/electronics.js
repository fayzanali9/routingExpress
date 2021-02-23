const express = require('express');
const router = express.Router();




router.route('/')
      .get((req,res) =>{res.send('This is Electronics page')});


router.route('/Smartphones')
      .get((req,res) =>{res.send(`Smartphones section of electronics`)})




module.exports = router