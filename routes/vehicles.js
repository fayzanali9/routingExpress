const express = require('express')
const router = express.Router();


router.use((req,res,next) =>{
    console.log(req.url + '----' + Date.now());
    next();
})
router.route('/').get((req,res) =>{res.send('things page')})

router.route('/cars')
      .get((req,res) =>{res.send('welcome to things cars get  page')})
      .post((req,res) =>{res.send('this is things cars post page')});



router.route('/cars/:id')
      .get((req,res) => {res.send('This is get car request with id '+ req.params.id)});


module.exports= router;