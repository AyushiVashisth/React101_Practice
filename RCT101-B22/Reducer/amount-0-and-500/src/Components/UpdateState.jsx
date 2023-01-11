const reducerFunctionToUpdateState = (state, action) => {
    switch (action.type) {
      case "INCREMENT_AMOUNT": {
        return state === 500 ? state + 2500 : state + 1000;
      }
      case "DECREMENT_AMOUNT": {
        return state - 500;
      }
      default: {
        return state;
      }
    }
  };
  export default reducerFunctionToUpdateState;