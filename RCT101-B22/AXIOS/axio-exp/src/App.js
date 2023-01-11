import './App.css';
import Countries from "./Components/Countries/Countries"
import Todo from './Components/Todos/Todos';
function App() {
   return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Todo/>
      <Countries/>
    </div>
  );
}

export default App;
