import './App.css';
import Button from "./Components/Button";
import Avatar from "./Components/Avatar";

const squaredArr = [1, 2, 3, 4, 5].map((el)=> <li>{el*2}</li>);

// [ REact.createElement{"ul",}]

function App() {
  console.log(squaredArr);
  return (
    // START OF JSX
    <div className="App">
      <Avatar
         src="https://tse1.mm.bing.net/th?id=OIP.11b7WGuI4_4QBZ2GHdYBUgHaEK&pid=Api&P=0"
         name="Rabbit"
         rounded={false}
      />
      <Avatar
         src="https://tse3.mm.bing.net/th?id=OIP.XfkqoUCDMund_dCeDYYlswHaSL&pid=Api&P=0"
         name="Happy Rabbit"
         rounded={true}
      />
      <Button text="Click me"></Button>
      <ul>{squaredArr}</ul>
    </div>
    // END OF JSX
  );
}

export default App;
