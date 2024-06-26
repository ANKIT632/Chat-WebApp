const {model,Schema}=require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    }
    
},{timestamps:true});


userSchema.methods.matchPassword=async function(givenPassword){
      return await bcrypt.compare(givenPassword,this.password);
}

userSchema.pre("save",async function(next){

    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      }
      next();
  
});


module.exports=model('User',userSchema);