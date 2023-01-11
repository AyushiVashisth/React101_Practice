export const addingAmount = (amount) => {
    return {
      type: "INCREMENT_AMOUNT",
      payload: amount
    };
  };
  export const reducingAmount = (amount) => {
    return {
      type: "DECREMENT_AMOUNT",
      payload: amount
    };
  };
  