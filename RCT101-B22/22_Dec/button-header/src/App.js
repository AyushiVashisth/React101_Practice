import logo from './logo.svg';
import './App.css';

//Component
function Button(properties){
  const {text, onClick} = properties;
  // JSX
  // onClick -> property that you need to define
  return <button onClick={onClick}>{text}</button>
}
// JSX
// Javascript XML

function Header(properties){
  const {text} = properties;
  return <h1>{text}</h1>
}

function App() {
  return (
    <div className="App">
      <Header text="Counter 0" />
      <Button onClick={() =>alert("add")} text="ADD" />
      <Button onClick={() => alert("reduce")} text="REDUCE" />
    </div>
  );
}

export default App;
