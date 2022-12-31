import logo from './logo.svg';
import './App.css';
import {useState, useRef} from "react";

function ButtonWithUseRef(){
  let count =useRef(0);
  // useRef(initValue)

  const handleClick = () => {
    count.current = count.current + 1;
    console.log(count);
  };

  console.log(`in ButtonWithUseRef`, Date.now());

  return (
    <>
      <h1>Count : {count.current}</h1>
      <button onClick={handleClick}>BUTTON WITH USE REF</button>
    </>
  )

}

function ButtonWithUseState(){
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log(`in ButtonWithUseState`, Date.now());
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>BUTTON WITH USE State</button>
    </>
  )

}

function App() {
  return (
    <div className="App">
      <ButtonWithUseRef />
      <ButtonWithUseState />
    </div>
  );
}

export default App;
