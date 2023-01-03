import { createContext } from "react";

// 1. Creating a new context callled ThemeContext
export const ThemeContext = createContext();
// ThemeContext.Provider

// 2.A Provider
const ThemeContextProvider = ({children}) => { 
    // APp
    return (
    <ThemeContext.Provider value={{theme: "dark"}}>
        {children}
        {/* App */}
    </ThemeContext.Provider>
    );
};

export default ThemeContextProvider