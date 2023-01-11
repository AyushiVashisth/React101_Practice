import React, { useReducer } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Actions } from "../context/AppContext";

const Counter = () => {
    const { state, dispatch } = useContext(AppContext);
    return (
        <>
          <h1>Counter</h1>
          <h3>{state.count}</h3>
          <button onClick={()=> dispatch({ type: Actions.INCREMENT, payload: 1})}>
            +
          </button>
          <button onClick={()=> dispatch({ type: Actions.DECREMENT, payload: 1})}>
            -
          </button>
          <button onClick={()=> dispatch({type: Actions.RESET})}>RESET</button>
        </>
    )
}

export default Counter;
