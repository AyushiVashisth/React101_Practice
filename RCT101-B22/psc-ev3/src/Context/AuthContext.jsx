import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(); // create

export default function AuthContextProvider({children}){
    const [ isAuth, setisAuth] = useState(false);
    const [token, setToken] = useState("");

    const login=(token)=> {
        setToken(token)
        setisAuth(true);
    }

    const logout=()=>{
        setisAuth(false);
        setToken("");
    }
console.log("token",token);
    return <AuthContext.Provider value={{isAuth, login, logout,token}}>
        {children}
    </AuthContext.Provider>
}



// create
// provide
// consumer

//isAuth-false
//isAuth--true