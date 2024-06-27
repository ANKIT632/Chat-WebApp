const UserModel =require('../models/userModel.js');
const jwt=require('jsonwebtoken')

const verifyJwtToken=async(req,res,next)=>{
    let token="";
      

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){ 
      try{
       
        token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
       
        req.user=await UserModel.findById(decoded._id).select('-password');

        next();


      }

      catch(err){
        return  res.status(401).json({ status:false,message: 'authorization failed' });

      }
    }
    else{
      return  res.status(401).json({ status:false,message: 'Not authorized, no token' });

    }
}
 

module.exports= {verifyJwtToken}