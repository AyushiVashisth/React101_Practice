import { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const[state,setstate]=useState({
        isAuth:false,
        token:null
    })

    const loginUser=(token)=>{
        setstate({...state,isAuth:true,token})
    }

    const logoutUser=()=>{
        setstate({...state,isAuth:false,token:null})
    }

    return (
        <AuthContext.Provider 
            value={{authState:state,logoutUser,loginUser}}
        >
            {children}
        </AuthContext.Provider>
    
    );
};

export default AuthContextProvider;