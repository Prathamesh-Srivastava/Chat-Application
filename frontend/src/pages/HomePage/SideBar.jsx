import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import { BiLogOut } from "react-icons/bi";
import LogOutHook from "../../Hooks/logOut";
const SideBar = ()=>{
    const {loading, logout} = LogOutHook();
    return (
        <div className='md:min-w-[350px] border-r border-sky-500 p-4 flex flex-col'>
            <SearchInput />
            <div className="divider divider-primary"></div>
            <Conversations />
            <div className='mt-auto'>
                {loading ? (
                <span className="loading loading-spinner text-accent"></span>
                ):(
                    <BiLogOut className='h-7 w-7 text-white cursor-pointer hover:text-gray-500' 
                    onClick={logout}/>
                )}
            </div>
        </div>
    );
}

export default SideBar;