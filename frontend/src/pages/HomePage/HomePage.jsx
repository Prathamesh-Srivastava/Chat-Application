import SideBar from "./SideBar";
import Chat from "./Chat";
const HomePage = ()=>{
    return (
        <div className='flex md:w-[1000px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400
        bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <SideBar/>
            <Chat/>
        </div>
    );
}

export default HomePage