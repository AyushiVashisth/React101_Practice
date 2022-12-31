import './App.css';
import { useRef, useState} from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  /*
  {
    current
  }
  */
 useEffect(() =>{
  input.current.focus();
 },[]);

  const handleAdd = () => {
    // add this to todo list;
    inputRef.current.focus();
  }

  console.log(inputRef.current);
  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        placeholder="add a todo"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleAdd}>Add TASK</button>
    </div>
  );
}

export default App;
