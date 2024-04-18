import { useContext } from "react";
import { createContext, useState } from "react";

//creating the context
export const AuthContext = createContext();

//context provider
export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chatApp-user")) || null);
    
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;

}

//custom hook to access the values in the context
export const useAuthContext =  ()=>{
    return useContext(AuthContext);
};