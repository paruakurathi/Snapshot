const express = require('express')
const app =express() //invoke
const mongoose = require('mongoose')
const PORT  = 5000
const { MONGOURL } = require("./config");



mongoose.connect(MONGOURL)
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo ');
})

mongoose.connection.on('error',(err)=>{
    console.log('err connectiong ',err);
})


require('./models/user')
require('./models/post')
  
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT,()=>{
    console.log("server is on running on ",PORT);
}) //This will appear on browser 





