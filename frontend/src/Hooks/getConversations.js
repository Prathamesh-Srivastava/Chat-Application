import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from 'axios';

const GetConversationHook = () =>{
    const [loading, setLoading] = useState(false);
    const [conversations,setConversations] = useState([]);

    useEffect(()=>{
        const getConversations = async()=>{
            setLoading(true);
            try {
                // const res = await fetch("http://localhost:5000/api/users", {
                //     method: "GET"
                // });

                const res = await axios.get("/api/users", { withCredentials: true })
    
                const data = res.data;
                
                setConversations(data);
    
            } catch (error) {
                toast.error(error.message);
            } finally{
                setLoading(false)
            }
        }

        getConversations();
    },[]);

    return {loading, conversations}
}

export default GetConversationHook;