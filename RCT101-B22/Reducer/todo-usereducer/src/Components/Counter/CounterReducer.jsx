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

export default reducerFunctionToUpdateState;