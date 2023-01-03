import { createContext, useState } from "react";

// 1. Creating a new context called ThemeContext
export const ThemeContext = createContext();
// ThemeContext.Provider

// 2.A Provider
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // App
  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
      {/* App */}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
