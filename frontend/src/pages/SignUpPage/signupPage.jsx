const signup = ()=>{
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-7 bg-gray-500 rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-20'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp to 
                <span className='text-black'> Chat-App</span></h1>
            <label className="form-control w-full max-w-xs p-3">
                <div className="label">
                    <span className="label-text text-xl">FullName</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text text-xl">UserName</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                
                <div className="label">
                    <span className="label-text text-xl">Password</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <div className="label">
                    <span className="label-text text-xl">Confirm Password</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <div className='flex'>
                <div className="form-control p-1">
                    <label className="label cursor-pointer">
                        <span className="label-text">Male</span> 
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </div>
                <div className="form-control p-1">
                    <label className="label cursor-pointer">
                        <span className="label-text">Female</span> 
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </div>
            </div>
            <a href="https://github.com/Prathamesh-Srivastava" className="link link-primary">Already have an account</a>
            <div>
                <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
            </div>
        </div>
    );
}

export default signup;