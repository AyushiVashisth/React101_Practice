import './App.css';
import { useState, useEffect, useRef } from "react";

function App() {
  const [task, setTask] = useState("");
  const inputRef = useRef([]);
  const styles = {width: "20px"};

  useEffect(() => {
    console.log(inputRef);
  },[]);

  const handleAddTodo = () => {
    inputRef.current[0].focus();
    console.log(inputRef);
  };

  return (
    <div className="App">
        <input 
          // value={task} 
          // onChange={(e) => setTask(e.target.value)} 
          ref={(el) => (inputRef.current[0] = el)}
          style={styles}
        />
        <input 
          // value={task} 
          // onChange={(e) => setTask(e.target.value)} 
          ref={(el) => (inputRef.current[1] = el)}
          style={styles}
        />
        <input 
          // value={task} 
          // onChange={(e) => setTask(e.target.value)} 
          ref={(el) => (inputRef.current[2] = el)}
          style={styles}
        />
        <input 
          // value={task} 
          // onChange={(e) => setTask(e.target.value)} 
          ref={(el) => (inputRef.current[3] = el)}
          style={styles}
        />
        <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}

export default App;
