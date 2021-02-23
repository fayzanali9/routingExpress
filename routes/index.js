const express = require('express')
const router = express.Router();
// const things = require('./things')
// above line was for 20th line and then commented for a better approach
// const api_v0 = require('./api.v0')
const furniture = require('./furniture')


router.use('/api',require('./api_v0'))


router.use('/furniture',furniture)


router.use('/vehicles',require('./vehicles'))
    //   .get((req,res) =>{res.send('welcome to things cars get  page')})
    //   .post((req,res) =>{res.send('this is things cars post page')})


// router.route('/things/cars/:id')
//       .get((req,res) => {res.send('This is get car request with id '+ req.params.id)})      


module.exports = router;