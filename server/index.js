const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();

const app=express();


const connectDb=async()=>{
  try{
  await mongoose.connect(process.env.MONGO_URI);
     console.log("db connect");}

     catch(err){
      console.log("err DB",err);
     }
  }

connectDb();

app.get('/',(req,res)=>{
  res.send("api running")
})

app.listen(process.env.PORT,(err)=>{
  if(!err)  
 console.log("server run on 5000 PORT")
})