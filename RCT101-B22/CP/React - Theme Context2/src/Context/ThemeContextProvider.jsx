import React from 'react'
import App from '../App'
// import { createContext, useState } from "react";
export const ThemeContext = React.createContext();

export default function ThemeContextProvider({children}) {
  const [isDarkTheme, setdarkTheme] = React.useState(false);

  const handleTheme=(value)=> {
    setdarkTheme(value);
  };


  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleTheme}}>
      {children}
      {/* <App/> */}
    </ThemeContext.Provider>
  );
};