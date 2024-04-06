import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { LuMessagesSquare } from "react-icons/lu";
const Chat = ()=>{
    const NoChatSelected = true; 
    return(
        <div className="md:min-w-[650px] flex flex-col">
            {NoChatSelected ? (
            <div className='flex items-center justify-center w-full h-full'>
                <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold
                flex flex-col gap-2 items-center'>
                    <p>Welcome Morgan Stark!</p>
                    <p>Select chat to start conversation</p>
                    <LuMessagesSquare className='text-2xl md:text-5xl text-center' />
                </div>
            </div>) :
                (<>
                    <div className="bg-blue-400 px-4 py-2 mb-2">
                        <span className=" text-black">To: </span><span className="text-gray-900 font-bold">Morgan Stark</span>
                    </div>
                    <ChatMessages />
                    <ChatInput />
                </>)
            }
        </div>
    );
}

export default Chat;
