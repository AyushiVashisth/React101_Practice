import "./styles.css";
import React from "react";

export default function App() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
    setTodos([]);
  };

  const handleAdd = () => {
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <input value={text} onChange={handleChange} placeholder="Enter" />
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <h2>{todo}</h2>
        ))}
      </ul>
    </div>
  );
}
