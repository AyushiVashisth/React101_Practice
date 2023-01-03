import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Button from "./Button";


// 2. Consumer - useContext
function Navbar() {
  const { isAuth, login, logout } = useContext(AuthContext);
  
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "space-around",
        alignItems: "center"
       }}
      >
      <h5>Home</h5>
      <h5>About</h5>
      <h5>Is user Authoticated : {isAuth ? "Yes" : "No"}</h5>
      <Button buttonText="Login" onClick={login}/>
      <Button buttonText="Logout" onClick={logout}/>
    </div>
  );
}

export default Navbar;
