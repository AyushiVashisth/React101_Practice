import { useReducer } from "react";
import reducerFunctionToUpdateState from "./UpdateState";

export default function Amount() {
  const [state, dispatch] = useReducer(reducerFunctionToUpdateState, {});
  

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT_AMOUNT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT_AMOUNT" });
  };

  return (
    <>
      <h2>Count: {state}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
