import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import {Navbar} from "../src/Routes/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}