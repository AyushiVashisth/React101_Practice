import "./styles.css";
import React from "react";
// import Counter from "./Components/Counter";
// import {Example} from "./Components/Example"
import { Todo } from "./Components/Todo";
export default function App() {
  // const [showCounter, setShowCounter] = React.useState(false);
  return (
    <div className="App">
      {/* {showCounter && <Counter/>}
      <br/>
      <button onClick={()=> setShowCounter(!showCounter)}>SHOW</button> */}
      {/* <Example/> */}
      <Todo />
    </div>
  );
}
