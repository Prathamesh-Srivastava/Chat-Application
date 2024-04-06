import { IoIosSend } from "react-icons/io";
const ChatInput = ()=>{
    return(
        <div className='flex items-center justify-between gap-2'>
            <input type="text" placeholder="Type a message..." className="input input-bordered input-primary w-full h-10 rounded-full" />
            <button className="btn btn-circle btn-outline bg-blue-600 h-6 w-12 text-white">
                <IoIosSend className="w-8 h-8" />
            </button>
        </div>
    );
}

export default ChatInput;