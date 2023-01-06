import { createContext, useState } from "react";

// C - P - C
// 1. Create a context
export const AuthContext = createContext();

// 2A. Provide access
const AuthContextProvider = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState(false);

    const login = () => {
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;