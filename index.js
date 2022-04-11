const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv').config();
const connectdb= require ('./config/connectdb')
const app= express();
const port = 5000;


// app.get('/',(req,res)=res.send('test'));
app.listen (process.env.port,() => 
console.log(`server is listening on port ${port}`));
