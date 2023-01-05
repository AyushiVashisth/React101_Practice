import React from 'react'
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import data from "../db.json";
import User from "./User"

export const Dashboard = () => {
    const [ formState, setFormState ] = useState("");
    const { isDarkTheme, handleTheme } = useContext(ThemeContext);

    const handleChange = (e) => {
        let val = e.target.value;
        if(val == "light"){
            handleTheme(false);
        }
        if(val == "dark"){
            handleTheme(true);
        }
      };

      
    return (
        <div data-testid = "dashboard-cont" style={ isDarkTheme ? {backgroundColor:"black", color:"white"} : {backgroundColor:"white", color: "black"} }>
            <select 
                data-testid = "select-theme"
                name = "theme"
                value={formState}
                onChange={handleChange}
            >
            <option value="">Choice Theme</option>
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            {data.map((el)=>(<User id={el.id} {...el} isDarkTheme={isDarkTheme}/>
            ))}
        </div>
    );
}
