
import { useState } from "react";


function Counter(){
    const [ state, setState] = useState(0);

    const handleIncrement = () => {
        setState( state + 1);
    };

    const handleDecrement = () => {
        setState( state - 1);
    };
    const handleReset = ()=>{
        setState(0);
    }

    return (
        <>
        <h1>UseState Hook</h1>
          <h3>Count: {state}</h3>
          <button onClick={handleIncrement}>INCREMENT</button>
          <button onClick={handleDecrement}>DECREMENT</button>
          <button onClick={handleReset}>RESET</button>
        </>
    )
}
export default Counter;