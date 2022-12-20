import "./styles.css";
import { useState, useRef } from "react";

const CounterWithUseRef = () => {
  let counterRef = useRef(0);
  //let intervalId = useReg(null);

  const handleclick = () => {
    counterRef.current = counterRef.current + 1;
    console.log("line 9", counterRef.current);
  };

  console.log("component rendered, CounterWithUseRef");

  return (
    <>
      <h1>Count : {counterRef.current}</h1>
      <button onClick = {handleclick}>BUTTON IN USE REF</button>
    </>
  );
};

const CounterWithUseState = () => {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount(count + 1);
  };

console.log("component rendered, CounterWithUseState");
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick = {handleclick}>BUTTON IN USE STATE</button>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <CounterWithUseRef/>

      <CounterWithUseState/>
    </div>
  );
}
