import {useContext, useEffect, useState} from 'react';
import { GetConversationContext } from "../Context/GetConversation";
import {toast} from "react-hot-toast";
import axios from "axios";

const GetMessagesHook = ()=>{
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useContext(GetConversationContext);
    
    useEffect(()=>{
        const getMessages = async()=>{
            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:5000/api/message/${selectedConversation._id}`,{ withCredentials: true });
                const data = res.data;

                setMessages(data);
            } catch (error) {
                toast.error(error.response.data);
            } finally{
                setLoading(false);
            }
        }

        if(selectedConversation?._id){
            getMessages();
        }
    },[selectedConversation?._id, messages?.length]);

    return {loading, messages};

}

export default GetMessagesHook;