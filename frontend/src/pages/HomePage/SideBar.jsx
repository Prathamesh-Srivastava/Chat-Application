import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import { BiLogOutCircle } from "react-icons/bi";
const SideBar = ()=>{
    return (
        <div className='md:min-w-[350px] border-r border-sky-500 p-4 flex flex-col'>
            <SearchInput />
            <div className="divider divider-primary"></div>
            <Conversations />
            <div className='mt-auto'>
                <BiLogOutCircle className='h-7 w-7 text-white cursor-pointer hover:text-gray-500' />
            </div>
        </div>
    );
}

export default SideBar;