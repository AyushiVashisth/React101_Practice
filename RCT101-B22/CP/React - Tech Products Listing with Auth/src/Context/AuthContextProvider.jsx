import React, {createContext,  useState} from 'react'

export const AuthContext=createContext();

export default function AuthContextProvider({children}) {
  const [isAuth,setIsAuth]=useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  const [token,setToken]=useState("")

  const handleAuth=(val)=>{
    setIsAuth(val)
  }
  const handleLoading=(val)=>{
    setIsLoading(val)
  }
  const handleError=(val)=>{
    setError(val)
  }
  const handleToken=(val)=>{
    setToken(val)
  }
  // const handleLogin=()=>
  console.log("Hello",token);
  return (
      <AuthContext.Provider value={{isAuth,isLoading,error,token,handleAuth,handleLoading,handleError,handleToken}}>
          {children}
      </AuthContext.Provider>
  )
}
