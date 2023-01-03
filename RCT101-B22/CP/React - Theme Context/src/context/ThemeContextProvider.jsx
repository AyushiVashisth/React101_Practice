import { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider=({children}) => {
  const [isDarkTheme, setdarkTheme] = useState(false);

  const handleTheme=(value)=> {
    setdarkTheme(value);
  };


  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;