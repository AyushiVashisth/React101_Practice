import React from "react";
import { useReducer } from "react";

export const Actions = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET:"reset"
}

const initalState = {
    count: 0
}

const reducer = ( state, action )=>{
    switch( action.type ){
        case Actions.INCREMENT:
            return {
                ...state,
                count:state.count + action.payload
            };
        case Actions.DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            };
        case Actions.RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
};

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initalState);
    const value = { state, dispatch };
    return (
        <>
          <AppContext.Provider value = { value }>
            {children}
          </AppContext.Provider>
        </>
    );
};

