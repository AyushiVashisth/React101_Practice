import React from "react";
import {Link, NavLink} from "react-router-dom";

console.log("Navbar")
const Navbar = () => {
    const links = [
        {path:"/", title:"Home"},
        {path:"/contact", title:"Contact"},
        {path:"/about", title:"About"},
        {path:"/login", title:"Login"},
        {path:"/products", title:"Product"},  
    ];
    console.log(links)
    return (
        <div >
            {links.map((link)=>(
                <NavLink key={link.path} to={link.path}>{link.title}</NavLink>
            ))}
        </div>
    );
};
export default Navbar;