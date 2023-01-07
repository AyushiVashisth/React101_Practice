import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/contact", title: "Contact" },
    { path: "/about-us", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/login", title: "Login"},
];
  return (
    <>
      {/* add your links */}
      <div 
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "10px",
            backgroundColor: "pink",
            }}
        >
            { links.map((link)=> (
            <NavLink 
                key={link.path} 
                to={link.path}
            >
                {link.title}
            </NavLink>
            ))}
            {/* { links.map((link)=> (
            <Link key={link.path} to={link.path}>
                {link.title}
            </Link>
            ))} */}
        </div>
    </>
  )
}

export default NavBar