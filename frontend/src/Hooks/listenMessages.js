const { useContext, useEffect } = require("react")
const { SocketContext } = require("../Context/SocketContext");
const { GetConversationContext } = require("../Context/GetConversation");

const ListenMessageHook = ()=>{
    const { socket } = useContext(SocketContext);
    const { messages, setMessages } = useContext(GetConversationContext);

    useEffect(()=>{

        socket?.on("newMessage", (newMessage)=>{
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");

    },[socket, messages, setMessages]);
}

export default ListenMessageHook;