import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const addTodo = () => {
    console.log(text, "making post req with data");
    setText("");
    inputRef.current.focus();
  };

  console.log(inputRef);
  return (
    <div className="App">
      <input 
         ref={inputRef}
         value={text}
         onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
}
