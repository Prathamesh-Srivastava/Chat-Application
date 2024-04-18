const { createContext, useState } = require("react");

export const GetConversationContext = createContext();

export const GetConversationProvider = ({children}) =>{
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);

    return <GetConversationContext.Provider value={{selectedConversation, setSelectedConversation, messages, setMessages}}>
        {children}
    </GetConversationContext.Provider>
}