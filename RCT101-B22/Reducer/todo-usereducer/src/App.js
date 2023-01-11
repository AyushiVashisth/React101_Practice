import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import Todo from "./Components/Todo/Todo"

function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <br/>
      <hr/>
      <Todo/>
    </div>
  );
}

export default App;
