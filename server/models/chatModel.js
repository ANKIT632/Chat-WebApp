const {model,Schema,default:mongoose}= require('mongoose');


const chatSchema=new Schema({
  chatName:{
    type:String
  },
  isGroupChat:{
    type :Boolean
  }
  ,
  users:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
  ],

  lastMessage:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Message'
  }
,
  groupAdmin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }
},{timestamps:true})

module.exports= model("Chat",chatSchema);