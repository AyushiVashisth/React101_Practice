import './App.css';
import { useContext } from "react";
import { ThemeContext } from './Context/ThemeContextProvider';

// 3. Consumer
export default function App() {
  const themeObjromContextAPI = useContext( ThemeContext);

  console.log(themeObjromContextAPI)
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}