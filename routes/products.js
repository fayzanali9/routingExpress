const express = require('express')
const router  = express.Router();

router.route('/')
      .get((req,res) =>{res.send('You have landed on products page from api page')})


router.use('/electronics',require('./electronics'))


module.exports = router