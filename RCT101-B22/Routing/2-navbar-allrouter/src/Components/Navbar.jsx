import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { path: "/home", title: "Home"},
  { path: "/about", title: "About"},
  { path: "/contact", title: "Contact"},
  { path: "/users", title: "Users"},
]


function Navbar(){
  // const activeLinkStyle = {
  //   textDecoration: "none",
  //   color: "green",
  // }

  // const defaultLinkStyle = {
  //   textDecoration: "none",
  //   color: "black",
  // }
    return (
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
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
            // style={({ isActive })=> {
            //   return isActive ?  activeLinkStyle : defaultLinkStyle;
            // }}
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
    )
}

export default Navbar;