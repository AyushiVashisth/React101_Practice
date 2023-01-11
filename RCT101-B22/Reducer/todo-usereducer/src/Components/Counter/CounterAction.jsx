export const incrementAction = (payload) => ({
    type: "INCREMENT_COUNT", 
    payload: payload
});

export const decrementAction = (payload) => ({
    type: "DECREMENT_COUNT", 
    payload: payload
});

export const resetAction= ()=> ({
    type: "RESET_COUNT",
})