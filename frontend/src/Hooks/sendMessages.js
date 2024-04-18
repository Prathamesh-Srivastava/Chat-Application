import { useContext, useState } from 'react';
import { GetConversationContext } from '../Context/GetConversation';
import { toast } from "react-hot-toast";
import axios from "axios";
const SendMessagesHook = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useContext(GetConversationContext);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await axios.post(`http://localhost:5000/api/message/send/${selectedConversation._id}`, { message }, { withCredentials: true });
            const data = res.data;

            setMessages(...messages, data);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
        }
    }

    return { sendMessage, loading };

}

export default SendMessagesHook;