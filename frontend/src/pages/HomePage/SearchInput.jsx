import { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GetConversationContext } from "../../Context/GetConversation";
import GetConversationHook from "../../Hooks/getConversations";
import toast from "react-hot-toast";
const SearchInput = ()=>{
    const [search, setSearch] = useState();
    const { setSelectedConversation } = useContext(GetConversationContext);
    const { conversations } = GetConversationHook();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!search) return;

        if(search.length < 3){
            return toast.error('Search term must be of length 3');
        }

        const conversation = conversations.find((c)=>c.userName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch('');
        }else return toast.error("No such user found");
    }
    return(
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" 
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}/>
            <button type='submit' className="btn btn-circle btn-outline bg-blue-600 text-white">
                <IoIosSearch className="w-6 h-6"/>
            </button>
        </form>
    );
}

export default SearchInput;