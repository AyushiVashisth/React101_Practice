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

const incrementAction = (payload) => ({
    type: "INCREMENT_COUNT", 
    payload: payload
});

const decrementAction = (payload) => ({
    type: "DECREMENT_COUNT", 
    payload: payload
});

const resetAction= (payload)=> ({
    type: "RESET_COUNT",
})

function Counter3(){
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

export default Counter3;