import { useContext } from "react";
import { GetConversationContext } from "../../Context/GetConversation";
import { SocketContext } from "../../Context/SocketContext";
const SingleConversation = ({conversation, lastIdx})=>{
    const {selectedConversation, setSelectedConversation} = useContext(GetConversationContext);

    const {onlineUsers} = useContext(SocketContext);
    const isOnline = onlineUsers.includes(conversation._id);

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer
                ${isSelected ? "bg-sky-400":""}
            `} onClick={()=>{setSelectedConversation(conversation)}}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-300'>{conversation.userName}</p>
                    </div>
                </div>
            </div>

            {lastIdx && <div className="divider divider-primary my-0 p-0 h-1"></div>}
        </>
    );
}

export default  SingleConversation;