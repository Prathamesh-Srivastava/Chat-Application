import GetConversationHook from "../../Hooks/getConversations";
import Conversation from "./SingleConversation";
const Conversations = ()=>{
    const {loading, conversations} = GetConversationHook();
    // console.log("Conversation: ",conversations);
    
    return(
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx)=>(
                <Conversation key={conversation._id} 
                conversation = {conversation} 
                lastIdx = {idx === conversations.length-1} />
            ))}
            {loading ? <span className="loading loading-spinner loading-md"></span> : null}
        </div>
    );
}

export default Conversations;