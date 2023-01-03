import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Button from "./Component/Button";

//3. Consumer
export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        padding: "10px",
        textAlign: "center",
        height:"600px"
      }}
    >
      <Navbar />
      <h1>Theme : {theme}</h1>
      <Button buttonText="Change Theme" onClick={toggleTheme}/>
      <Footer />
    </div>
  );
}
