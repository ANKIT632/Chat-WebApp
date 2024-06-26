const UserModel = require('../models/userModel.js');
const  generateToken  = require('../service/generateToken.js');

const registerController = async (req, res) => {
    try {
     
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ status: false, message: "All necessary input fields must be filled" });
        }

        // check pre-exist user 
        const existingUser = await UserModel.findOne({
            $or: [{ email }, { name }]
          });
          
          if (existingUser) {
            if (existingUser.email === email) {
              return res.status(400).json({ status: false, message: "User email already exists" });
            } else if (existingUser.name === name) {
              return res.status(400).json({ status: false, message: "User name already exists" });
            }
          }

        const user = await UserModel.create({ name, email, password });

        if (user) {
            return res.status(201).json({
                status: true, message: "Registration success", data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                }
            });
        }
        else {
            return res.status(500).json({ status: false, message: "Registration failed try again !! " })
        }

    } catch (error) {

        return res.status(500).json({ status: false, message: error.message });
    }
}

const loginController =async (req, res) => {
  try{
  const {name,password}=req.body;

  const user=await UserModel.findOne({name});
   
 
  if(user && await user.matchPassword(password)){
    return res.status(201).json({
        status: true, message: "login success", data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        }
        
    })
  }
  else{
    return res.status(401).json({status:false,message:"Invalid username or password !! "});
  }

  }

  catch(err){
    return res.status(500).json({ status: false,message:err.message})
  }
}



module.exports = { loginController, registerController }