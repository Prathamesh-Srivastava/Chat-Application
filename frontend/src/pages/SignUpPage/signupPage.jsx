import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpHook from "../../Hooks/signUp"

const Signup = ()=>{
        const [input,setInput] = useState({
            fullName: '',
            userName: '',
            password: '',
            confirmPassword: '',
            gender: ''
        });

        const {loading, signup} = SignUpHook();
        
        const handleSubmit = async (e)=>{
            e.preventDefault();
            // console.log(input);
            await signup(input);
        }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-7 bg-gray-500 rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-20'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp to 
                <span className='text-black'> Chat-App</span></h1>
                    <form onSubmit={handleSubmit}>
                        <label className="form-control w-full max-w-xs p-3">
                            <div className="label">
                                <span className="label-text text-xl">FullName</span>
                            </div>
                        </label>

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.fullName} onChange={(e) => setInput({...input, fullName: e.target.value})}/>

                        <div className="label">
                            <span className="label-text text-xl">UserName</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.userName} onChange={(e)=> setInput({...input, userName: e.target.value})}/>
                        
                        <div className="label">
                            <span className="label-text text-xl">Password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.password} onChange={(e)=> setInput({...input, password: e.target.value})}/>

                        <div className="label">
                            <span className="label-text text-xl">Confirm Password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.confirmPassword} onChange={(e)=> setInput({...input, confirmPassword: e.target.value})}/>
                    <div className='flex'>
                        <div className="form-control p-1">
                            <label className="label cursor-pointer">
                                <span className="label-text">Male</span> 
                                <input type="checkbox" className="checkbox checkbox-primary" 
                                onChange={(e)=>{
                                    if(e.target.checked){
                                        setInput({...input, gender: "male"});
                                    }else{
                                        setInput({...input, gender: ""});
                                    }
                                }}/>
                            </label>
                        </div>
                        <div className="form-control p-1">
                            <label className="label cursor-pointer">
                                <span className="label-text">Female</span> 
                                <input type="checkbox" className="checkbox checkbox-primary" 
                                onChange={(e)=>{
                                    if(e.target.checked){
                                        setInput({...input, gender: "female"});
                                    }else{
                                        setInput({...input, gender: ""});
                                    }
                                }}/>
                            </label>
                        </div>
                    </div>
                    <Link to='/login' className="link link-primary">Already have an account</Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner loading-md"></span> : "SignUp"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;