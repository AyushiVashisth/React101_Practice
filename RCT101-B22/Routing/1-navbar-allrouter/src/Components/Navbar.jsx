import { Link } from "react-router-dom";

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
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
      </div>
    )
}

export default Navbar;