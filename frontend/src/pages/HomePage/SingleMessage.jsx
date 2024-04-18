import { useContext } from "react";
import {AuthContext} from "../../Context/AuthContext"
import { GetConversationContext } from "../../Context/GetConversation";
import { extractTime } from "../../utils/extractTime";
const SingleMessage = ({message})=>{
    const {authUser} = useContext(AuthContext);
    const {selectedConversation} = useContext(GetConversationContext);

    const iAmSender = (message.senderId === authUser._id);
    const chatClassName = iAmSender ? 'chat chat-end':'chat chat-start';
    const profilePic = iAmSender ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleColor = iAmSender ? 'bg-blue-500':'';
    const textColor = iAmSender ? 'black':'white';
    const formattedTime = extractTime(message.createdAt);
    return (
        <div className={chatClassName}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble ${bubbleColor} text-${textColor}`} >{message.message}</div>
            <time className="text-xs opacity-100">{formattedTime}</time>
        </div>
    );
}
export default SingleMessage;