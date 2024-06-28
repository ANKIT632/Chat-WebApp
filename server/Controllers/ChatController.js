
const ChatModel=require('../models/chatModel');
const UserModel=require('../models/userModel');

const accessChatContoller=async(req,res)=>{
  const {userId}=req.body;

  if(!userId){
    return res.status(400).json({status:false,message:"User Param not send"});
  }
  try{

  var isChat=await ChatModel.find({
     isGroupChat:false,
     $and:[
        {users:{$elemMatch:{$eq:req.user._id}}},
        {users:{$elemMatch:{$eq:userId}}},
     ],
  }).populate("user","-password").populate('lastMessage');

  isChat=await UserModel.populate(isChat,{
    path:"lastMessage.Sender",
    select:"name email"
  });

  // if chat find the return
  if(isChat.length>0){
    return res.status(200).json({status:true,chat:isChat[0]});
  }

  // create new chat. 
  else{
    var chatData={
        chatName:"sender",
        isGroupChat:false,
        users:[req.user._id,userId],
    };

    const createChat=await ChatModel.create(chatData);
    
    const FullChat =await ChatModel.findOne({_id:createChat._id}).populate('users','-password');
    
    return res.status(200).json({status:true,chat:FullChat});
  

  }

}
catch(err){
    return res.status(400).json({status:false,message:err}); 
}
}

const fetchChats=async(req,res)=>{
   
    try { 
   
        ChatModel.find({ users: { $elemMatch: { $eq: req.user._id } } })
          .populate("users", "-password")
          .populate("groupAdmin", "-password")
          .populate("latestMessage")
          .sort({ updatedAt: -1 })
          .then(async (results) => {
            results = await UserModel.populate(results, {
              path: "latestMessage.sender",
              select: "name email",
            });
            res.status(200).send(results);
          });
      } catch (error) {
        res.status(400).json({status:false,message:error})
      }
}

// get all group

const fetchGroups=async(req,res)=>{
    try{
    const allGroups=await ChatModel.where("isGroupChat").equals(true);
    return res.status(200).json({status:true,group:allGroups});
    }
    catch(err){
        return res.status(400).json({status:false,message:err.message}); 
    }
}

const createGuoupChat=async(req,res)=>{
     if(!req.body.users || !req.body.name){
        return res.status(400).send({status:false,message:"give all field for create group !!"});
     }

     var users=JSON.parse(req.body.users);

     users.push(req.user);
    
     try{

        const groupChat=await ChatModel.create({
            chatName:req.body.name,
            users:users,
            isGroupChat:true,
            groupAdmin:req.user,
        });


        const fullGroupchat=await ChatModel.findOne({_id:groupChat._id}).populate('users','-password').populate('groupAdmin','-password');

        return res.status(200).json({status:true,groupChat:fullGroupchat});

     }
     catch(err){
        return res.status(500).json({status:false,message:err.message}); 
    }

}

const addSelfToGroup=async(req,res)=>{

    const {chatId,userId}=req.body;

    try{

    const added=await ChatModel.findByIdAndUpdate(chatId,{$push:{users:userId}},{new:true})
    .populate('users','-password').populate('groupAdmin','-password');

    if(!added){
        return res.status(400).json({status:false,message:"chat Not Found"});
    }
    else{
        return res.status(200).json({status:true,addChat:added});
    }
    }
    catch(err){
        return res.status(500).json({status:false,message:err.message}); 
    }

}

// not complete
const exitGroup=async (req,res)=>{
    const { chatId, userId } = req.body;

    // check if the requester is admin
  try{
    const removed = await ChatModel.findByIdAndUpdate(
      chatId,
      {
        $pull: { users: userId },
      },
      {
        new: true,
      }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
  
    if (!removed) {
      res.status(404).json({status:false,message:"Chat Not Found"});
    } else {
      res.status(200).json({status:true,removed});
    }
}
catch(err){
    return res.status(500).json({status:false,message:err.message}); 
}
}


module.exports ={accessChatContoller,fetchChats,fetchGroups,createGuoupChat,exitGroup,addSelfToGroup}