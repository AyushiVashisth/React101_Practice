import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import React from 'react';

function App() {
  const [show, setShow] = React.useState(true);
  return (
    <div className="App">
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>
        {show ? "HIDE TIMER" : "SHOW TIMER"}
      </button>
    </div>
  );
}

export default App;
