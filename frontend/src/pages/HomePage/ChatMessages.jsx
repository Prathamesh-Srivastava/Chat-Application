import GetMessagesHook from "../../Hooks/getMessages";
import SingleMessage from "./SingleMessage";
import MessageSkeleton from "./Skeleton";
const ChatMessages = () =>{
    const {loading, messages} = GetMessagesHook();
    console.log("messages: ",messages);
    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length>0 && messages.map((message) => (
                <SingleMessage key={message.id} message={message} />
            ))}
            
            {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/>)}

            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start conversation</p>
            )}
        </div>


    )
}
export default  ChatMessages;