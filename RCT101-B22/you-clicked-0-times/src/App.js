import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  console.log(1);
  // React.useEffect( callbackFunc, dependencyArrat)
  React.useEffect(()=> {
    // call this callback function when the component load for first time
    console.log("useEffect is called");
    document.title = `Clicked ${count} times`;
  }, [count]);

  /*
     React.useEffect( () =>{
      // amount - mounted onto UI
      // update - any updates happens
      // unmount - unmounted
     }, dependencyArray);  
  */   

  console.log(2);

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button onclick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
}

export default App;
