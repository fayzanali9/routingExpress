const express= require('express')
const router = express.Router();


router.route('/')
      .get((req,res) =>{res.send('You have come to the api section')});



router.use('/products',require('./products'))



module.exports = router