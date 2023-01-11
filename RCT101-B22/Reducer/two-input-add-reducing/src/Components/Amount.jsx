import { useReducer, useState } from "react";
import { reducingAmount, addingAmount } from "./amountAction";
import reducer from "./amountReducer";

function Counter() {
  const [state, dispatch] = useReducer(reducer, {amount: 0});
  const [add, setAdd] = useState(0);
  const [reduce, setReduce] = useState(0);

  return (
    <>
        <h1>Amount :{state.amount}</h1>
        <hr/>
        <h1>Adding the Amount</h1>
        <input
            value={add}
            onChange={(e) => setAdd(Number(e.target.value))}
            type="number"
            placeholder="Adding Amount"
        />
        <br />
        <br />  
       <button
            onClick={() => {
            dispatch(addingAmount(add));
            }}
        >
            ADD Amount
        </button>
        <br/>
        <br/>
        <hr/>
        <h1>Reducing the Amount</h1>
        <input
             value={reduce}
            onChange={(e) => setReduce(Number(e.target.value))}
            type="number"
            placeholder="Reducing Amount"
        />
       
        <br />
        <br />
        <button
            onClick={() => {
            dispatch( reducingAmount(-reduce));
            }}
        >
            REDUCE AMOUNT
        </button>
    </>
  );
}

export default Counter;
