import './App.css';
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<h1>HOME PAGE</h1>}/>
        {/*
           path prop --->
        */}
        <Route path="/about" element={<h1>ABOUT PAGE</h1>}/>
        <Route path="/contact" element={<h1>CONTACT PAGE</h1>}/>
        <Route path="/contact" element={<h1>CONTACT PAGE</h1>}/>
      </Routes>
    </div>
  );
}
export default App;
