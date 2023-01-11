import {  useReducer } from "react";

export const Action = {
  Inc: "INCREASE",
  Dec: "DECERESE",
  Res: "RESET",
};
let initialState=(init)=>{
    return{count:init}
}

const reducer = (state, action,init) => {
  switch (action.task) {
    case Action.Inc:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case Action.Dec:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case Action.Res:
      return {
        ...state,
        ...initialState(0)
      };
    default:
      return state;
  }
};



function Button({init,load}) {
  const [state, dispatch] = useReducer(reducer, initialState(init));
  console.log(state);
 

  return (
      <div>
        <button onClick={()=>dispatch({ task: Action.Dec, payload: load })}>DEC</button>
        <button>{state.count}</button>
        <button onClick={() => dispatch({ task: Action.Inc,payload: load })}>INC</button>
        <br />
        <button onClick={()=>dispatch({task:Action.Res})}>Reset</button>
      </div>

  );
}
export default Button;

