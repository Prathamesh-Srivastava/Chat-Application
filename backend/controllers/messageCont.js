const Conversation = require("../models/conversationMod");
const Message = require("../models/messageMod");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{ $all : [senderId , id] } 
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,id]
            })
        }

        const msg = new Message({
            senderId:senderId,
            receiverId:id,
            message:message,
        });

        await msg.save();

        conversation.messages.push(msg._id);

        await conversation.save();

        //Socket Implementation 
        const receiverSocketId = getReceiverSocketId(id);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", msg);
        }

        res.status(201).json(msg);
        
    } catch (error) {
        console.log("Error in meesage controller", error);
        return res.status(500).json("Internal server error");   
    }
}

const getMessage = async (req,res)=>{
    const {id} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participants:{$all : [senderId , id]}
    }).populate("messages");

    if(!conversation){
        return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
}

module.exports = {sendMessage, getMessage}