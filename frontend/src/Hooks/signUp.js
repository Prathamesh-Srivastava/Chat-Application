import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import axios from "axios";

const SignUpHook = ()=>{
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async({fullName, userName, password, confirmPassword, gender})=>{
        const inputSuccess = handleInputs({fullName, userName, password, confirmPassword, gender});
        if(!inputSuccess) return;

        setLoading(true);

        try {
            // const res = await fetch("http://localhost:5000/api/auth/signup", {
            //     method: "POST",
            //     headers: {"Content-type": "application/json"},
            //     body: JSON.stringify({fullName, userName, password, confirmPassword, gender})
            // });

            const res = await axios.post("/api/auth/signup",
            {fullName, userName, password, confirmPassword, gender},{ withCredentials:true});

            const data = await res.data;

            // console.log(data);

            localStorage.setItem("chatApp-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            // console.log(error);
            toast.error(error.response.data);
        } finally{
            setLoading(false);
        }
    };

    return {loading, signup};
}

export default  SignUpHook;

function handleInputs ({fullName, userName, password, confirmPassword, gender}){
    if(!fullName || !userName || !password || !confirmPassword  || !gender){
        toast.error( "Please fill all fields");
        return false;
    }
    if(password !== confirmPassword) {
        toast.error("Confirm password do not match with passwords")
        return false;
    }
    if(password.length < 6 ) {
        toast.error("Minimum length of password should be 6");
        return false;
    }

    return true;
}