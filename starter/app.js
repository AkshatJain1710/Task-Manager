

const express=require('express');
const { connect } = require('mongoose');
const app=express();
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect');
require('dotenv').config();
//middleware
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes 


app.use('/api/v1/tasks',tasks)


const PORT= 3000;
const start=async()=>{
    try{
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT,()=>{
        console.log(`server is working at port ${PORT}...`)
    })
    }
    catch(error){
console.log(error)
    }   
}

start();  
    








