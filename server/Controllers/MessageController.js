const messageModel = require('../models/messageModel');
const chatModel = require('../models/chatModel');
const userModel = require('../models/userModel');

const allMessage = async (req, res) => {

    try {
        const message = await messageModel.find({ chat: req.params.chatId })
            .populate("sender", 'name email').
            populate("reciever").
            populate("chat");

        return res.status(200).json({ status: true, message });

    }
    catch (err) {
        return res.status(400).json({ status: false, message: err.message });
    }
}
const sendMessage = async () => {
    const { content, chatId } = req.body;
    if (!content || !chatId) {
        return res.status(400).json({ status: false, message: "You Not provide content or chatId !!" });
    }

    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId
    };

    try {

        var message = await messageModel.create(newMessage);

        message = await message
            .populate('sender', 'name')
            .populate('chat')
            .populate('receiver')
            .populate({
                path: "chat.users",
                select: 'name email'
            })
            .execPopulate();

        await chatModel.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

        return res.status(200).json({ status: true, message })

    }
    catch (err) {
        return res.status(400).json({ status: false, message: err.message });
    }
}


module.exports = { allMessage, sendMessage };