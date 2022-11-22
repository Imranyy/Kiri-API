const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

//middleware
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',require('./route/api'));

const port=process.env.PORT||5000;
app.listen(port,()=>{
     console.log(`Server running on Port ${port}`)
})
