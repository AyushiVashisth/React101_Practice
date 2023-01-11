
import { useState } from 'react';
import './App.css';
import Button from "./Components/Button"


function App() {
  
  
  return (
    <div className="App">
      <Button init={0} load={1000}/>
      <Button init={500} load={2000}/>
    </div>
  );
}
// console.log(val)

export default App;
