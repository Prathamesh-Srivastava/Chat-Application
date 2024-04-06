import { IoIosSearch } from "react-icons/io";
const SearchInput = ()=>{
    return(
        <div className='flex items-center gap-2'>
            <input type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-circle btn-outline bg-blue-600 text-white">
                <IoIosSearch className="w-6 h-6"/>
            </button>
        </div>
    );
}

export default SearchInput;