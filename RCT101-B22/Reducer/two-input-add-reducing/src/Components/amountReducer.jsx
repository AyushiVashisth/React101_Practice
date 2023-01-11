function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT_AMOUNT":
        return { 
            ...state, 
            amount: state.amount + action.payload 
        };
      case "DECREMENT_AMOUNT":
        return { 
            ...state, 
            amount: state.amount + action.payload 
        };
      default:
        return state;
    }
  }
  export default reducer;
  