import { useReducer } from "react";
import { decrementAction, incrementAction, resetAction } from "./CounterAction";
import reducerFunctionToUpdateState from "./CounterReducer";

function Counter(){
    const [state, dispatch ] = useReducer(reducerFunctionToUpdateState, 0);

    const handleIncrement=()=>{
        dispatch(incrementAction(1));
    };

    const handleDecrement = () =>{
        dispatch(decrementAction(1));
    };

    const handleReset = () =>{
        dispatch(resetAction());
    };

    return (
        <>
        <h1>Counter with UseReducer Hook</h1>
          <h3>Count: {state}</h3>
          <button onClick={handleIncrement}>INCREMENT</button>
          <button onClick={handleDecrement}>DECREMENT</button>
          <button onClick={handleReset}>RESET</button>
        </>
    )
}

export default Counter;