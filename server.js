const express = require('express');
const app = express()




app.use(require('./routes'))
// middleware function will work for all requests
//this will look for index.js file of routes directory 


const port = 8000;

// app.use(express.static('public')); 
// to serve static pages remember at root('/') 
//    make file as index.html in public directory


app.use(express.json())
// It parses incoming requests with JSON payloads and is based on body-parser.


// const things = require('./routes/things')
// app.use('/things',things)
//use the things.js file to handle the 
// endpoints that start with /things


app.get('/',(req,res) =>{
    res.send('Root page and have links to products,api,etc')
    // res.sendFile(__dirname+'/views/getMail.html')
})
// app.get('/users',userRouter)



app.listen(port,() =>{console.log(`server listening at ${port}`)})