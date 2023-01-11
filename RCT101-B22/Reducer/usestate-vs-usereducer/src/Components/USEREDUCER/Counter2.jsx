import { useReducer } from "react";


function reducerFunctionToUpdateState( state, action){
    switch( action.type){
        case "INCREMENT_COUNT":{
            return state + action.payload;
        }
        case "DECREMENT_COUNT":{
            return state - action.payload;
        }
        case "RESET_COUNT":{
            return 0;
        }
        default:{
            return state;
        }
    }
}

function Counter2(){
    const [state, dispatch ] = useReducer(reducerFunctionToUpdateState, 0);

    const handleIncrement=()=>{
        dispatch({ type: "INCREMENT_COUNT", payload:1})
    };

    const handleDecrement = () =>{
        dispatch({ type: "DECREMENT_COUNT", payload:1})
    };
    const handleReset = () =>{
        dispatch({ type: "RESET_COUNT"})
    };

    return (
        <>
        <h1>UseReducer Hook with payload</h1>
          <h3>Count: {state}</h3>
          <button onClick={handleIncrement}>INCREMENT</button>
          <button onClick={handleDecrement}>DECREMENT</button>
          <button onClick={handleReset}>RESET</button>
        </>
    )
}

export default Counter2;