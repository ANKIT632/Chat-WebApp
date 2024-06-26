const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const cors=require('cors');
const UserRouter=require('./routes/userRoute.js');


dotenv.config();

const app=express();

app.use(express.json())
app.use(cors());


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

app.use('/user',UserRouter);

app.listen(process.env.PORT,(err)=>{
  if(!err)  
 console.log("server run on 5000 PORT")
})