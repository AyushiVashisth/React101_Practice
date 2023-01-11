import { useReducer } from "react";


function reducerFunctionToUpdateState( state, action){
    switch( action.type){
        case "INCREMENT_COUNT":{
            return state + 1;
        }
        case "DECREMENT_COUNT":{
            return state - 1;
        }
        case "RESET_COUNT":{
            return 0;
        }
        default:{
            return state;
        }
    }
}

function Counter1(){
    const [state, dispatch ] = useReducer(reducerFunctionToUpdateState, 0);

    const handleIncrement=()=>{
        dispatch({ type: "INCREMENT_COUNT"})
    };

    const handleDecrement = () =>{
        dispatch({ type: "DECREMENT_COUNT"})
    };
    const handleReset = () =>{
        dispatch({ type: "RESET_COUNT"})
    };

    return (
        <>
        <h1>UseReducer Hook without payload</h1>
          <h3>Count: {state}</h3>
          <button onClick={handleIncrement}>INCREMENT</button>
          <button onClick={handleDecrement}>DECREMENT</button>
          <button onClick={handleReset}>RESET</button>
        </>
    )
}

export default Counter1;