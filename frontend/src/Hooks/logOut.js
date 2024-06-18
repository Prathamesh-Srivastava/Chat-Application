import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import axios from "axios";

const LogOutHook = ()=>{
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async()=>{
        setLoading(true);
        try {
            // const res = await fetch("http://localhost:5000/api/auth/logout",{
            //     method:"POST",
            //     headers:{"Content-type": "application/json"}
            // });

            const res = await axios.post("/api/auth/logout",{},{withCredentials:true});

            const data = res.data;

            localStorage.removeItem("chatApp-user");
            setAuthUser(null);

        } catch (error) {
            toast.error(error.code);
        } finally{
            setLoading(false);
        }
    }

    return {loading, logout};
}

export default LogOutHook;