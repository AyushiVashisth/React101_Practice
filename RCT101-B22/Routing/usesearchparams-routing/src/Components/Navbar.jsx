import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
const links = [
    { path: "/", title: "Home" },
    { path: "/contact", title: "Contact" },
    { path: "/about", title: "About" },
    { path: "/users", title: "Users" },
    { path: "/admin", title: "Admin Page"},
    { path: "./login", title: "Login"},
];

function Navbar(){
    const { isAuth, logout } = useContext(AuthContext);
    return (
        <div 
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: "10px",
            paddingBottom: "10px",
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
            <p>Is User Authenticated : { isAuth ? "YES" : "NO" } </p>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}

export default Navbar;