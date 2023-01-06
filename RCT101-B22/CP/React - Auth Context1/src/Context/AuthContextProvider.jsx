import React, {useState,createContext} from 'react'
export const AuthContext=createContext();
export default function AuthContextProvider({children}) {
  const [isAuth,setIsAuth]=useState(false);
  const [token, setToken ] = useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);

  const handletoken=(val)=>{
    setToken(val);
  }
  const login=()=>{
    setIsAuth(true);
  }
  const logout = () =>{
    setIsAuth(false);
  }
  const handleLoading=(val)=>{
    setIsLoading(val)
  }
  const handleError=(val)=>{
    setError(val)
  }

  return (
    <AuthContext.Provider value={{handletoken,logout, login,token, handleLoading, handleError}}>
      {children}
    </AuthContext.Provider>
  )
}
