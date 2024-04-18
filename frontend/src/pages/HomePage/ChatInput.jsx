import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import SendMessagesHook from "../../Hooks/sendMessages";
const ChatInput = ()=>{
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = SendMessagesHook();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-between gap-2'>
                <input type="text" placeholder="Type a message..." className="input input-bordered input-primary w-full h-10 rounded-full" 
                value={message} onChange={(e)=>setMessage(e.target.value)} />
                <button type='submit' className="btn btn-circle btn-outline bg-blue-600 h-6 w-12 text-white">
                    {loading ? <span className="loading loading-spinner loading-md"></span> : <IoIosSend className="w-8 h-8" />}
                </button>
            </div>
        </form>
    );
}

export default ChatInput;