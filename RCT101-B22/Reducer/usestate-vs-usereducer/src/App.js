import logo from './logo.svg';
import './App.css';
import Counter from './Components/USESTATE/Counter';
import Counter1 from './Components/USEREDUCER/Counter1';
import Counter2 from './Components/USEREDUCER/Counter2';
import Counter3 from './Components/USEREDUCER/Counter3';

function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <br/>
      <hr/>
      <Counter1/>
      <br/>
      <br/>
      <hr/>
      <Counter2/>
      <br/>
      <br/>
      <hr/>
      <Counter3/>
    </div>
  );
}

export default App;
