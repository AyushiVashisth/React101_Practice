import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    setAmount(amount + 100);
    setAmount(amount + 100);
    setAmount(amount + 100);
    setAmount(amount + 100);
    console.log(`amount is ${amount}`);
  };
  const handleDepositPrevAmount = () => {
    setAmount((prevAmount) => prevAmount + 100);
    setAmount((prevAmount) => prevAmount + 100);
    setAmount((prevAmount) => prevAmount + 100);
    setAmount((prevAmount) => prevAmount + 100);
    console.log(`amount is ${amount}`);
  };

  const handleWithdraw = () => {
    setAmount(amount - 100);
  }

  return (
    <div className="App">
     <h1>Count : {amount}</h1>
     <button onClick={handleDeposit}>Deposit 100</button>
     <button onClick={handleWithdraw}>Withdraw 100</button>
     <button onClick={handleDepositPrevAmount}>Deposite Previous Amount</button>
    </div>
  );
}

export default App;
