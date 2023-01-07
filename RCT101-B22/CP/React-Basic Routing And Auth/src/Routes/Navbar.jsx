import { NavLink } from "react-router-dom";

const links = [
  { path: "/login", text: "Login" },
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/products", text: "Products" },
];

function Navbar() {
  return (
    <div className="navbar"
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px",
        backgroundColor: "pink",
        }}>
      {links.map((el) => (
        <NavLink key={el.path} to={el.path}>{el.text}</NavLink>
      ))}
    </div>
  );
}

export { Navbar };