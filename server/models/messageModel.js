const {Model,Schema}=require('mongoose');

const messageSchema= new Schema({

    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    chat:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"Chat",
    }
    

},{timestamps:true,});

module.exports=model('Message',messageSchema);