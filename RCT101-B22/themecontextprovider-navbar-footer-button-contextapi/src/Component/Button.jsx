import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Button({ onClick }) {
  const { theme} = useContext(ThemeContext);

  return (
    <button
      onClick={()=>onClick()}
      style={{
        background: theme === "dark" ? "blue" : "yellow",
        color: theme === "dark" ? "yellow" : "blue",
        padding: "5px",
        border: theme === "light" ? "1px solid black" : "1px solid white"
      }}
    >
      {buttonText}
    </button>
  );
}
export default Button;
