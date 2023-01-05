import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <div 
         style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <a href="./about">Home</a> */}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        {/*
           path prop --> on which path you want to show
           element props --> what do you want to show
        */}
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;
