import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
const links = [
    { path: "/", title: "Home" },
    { path: "/contact", title: "Contact" },
    { path: "/about", title: "About" },
    { path: "/users", title: "Users" },
    { path: "/admin", title: "Admin Page"},
];

function Navbar(){
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