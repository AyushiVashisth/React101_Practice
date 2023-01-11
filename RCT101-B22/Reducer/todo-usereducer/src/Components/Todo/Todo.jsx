import { useState } from "react";
import { useReducer } from "react";
import AddTodo from "./AddTodo";

const addTodo = (payload) => ({
    type: "ADD_TODO",
    payload
});

const deleteTodo = (payload) => ({
    type: "DELETE_TODO",
    payload
});



function reducer(state, action){
    switch (action.type){
        case "ADD_TODO": {
            return [...state, action.payload];
        }
        case "DELETE_TODO":{
            return state.filter((todo)=> todo.id !== action.payload);
        }
        default: {
            return state;
        }
    }
};

function Todo(){
    // todo list
    const [state, dispatch ] = useReducer(reducer, []);
    

    const handleAddTodo =(text)=>{
        const newTodo = {
            // add this newly create todo to state;
            id: Math.random() + Date.now() + text,
            title: text,
            status: false
        };
        dispatch(addTodo(newTodo));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <>
          <AddTodo handleAddTodo={handleAddTodo}/>
          <div>
            {/* list */}
            {state.map((todo)=> (
                <div key={todo.id}>
                    <li key={todo.id}>{todo.title}</li>
                    <button onClick={()=> handleDelete(todo.id)}>DELETE</button>
                </div>
            ))}
          </div>
        </>
    )
}

export default Todo;