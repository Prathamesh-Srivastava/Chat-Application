import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import axios from 'axios';

const LogInHook = ()=>{
    const [loading,setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({userName,password}) =>{
        const inputSuccess = handleInput({userName,password});
        if(!inputSuccess) return;

        setLoading(true);
        try {
            // const res = await fetch("http://localhost:5000/api/auth/login", {
            //     method:"POST",
            //     headers: {"Content-type": "application/json"},
            //     body: JSON.stringify({userName,password})
            // });

            const res= await axios.post("http://localhost:5000/api/auth/login",{userName, password},{ withCredentials: true });
            
            // console.log(res); 
            
            const data = res.data;
            
            localStorage.setItem("chatApp-user",JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            // console.log(error);
            toast.error(error.response.data);
        } finally{
            setLoading(false);
        }
    }

    return {loading,login}

}

export default LogInHook;

function handleInput ({ userName , password }) { 
    if(!userName || !password){
        toast.error( 'Please enter all fields' );
        return false;
    }

    if(password.length < 6){
        toast.error('Password must be at least 6 characters');
        return false;
    }

    return true;

}