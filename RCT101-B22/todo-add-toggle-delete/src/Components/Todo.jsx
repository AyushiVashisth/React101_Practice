import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Todo(){
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
        const newItem = {
            title: text,
            status: false,
            id: new Date().toDateString() + text
        };
        const todoListAfterNewItemAddition = [...todos, newItem];
        setTodos(todoListAfterNewItemAddition);
    };

    const handleToggle = (id) => {
        const todosAfterUpdation = todos.map(
            (todo) => (todo.id === id ? {...todo, status: !todo.status } : todos)
        );
        setTodos(todosAfterUpdation);
    };

    const handleDelete = (id) => {
        const todosAfterDeletion = todos.filter((todo)=> todo.id !== id);
        setTodos(todosAfterDeletion);
    };

    return (
        <div>
            <AddTodo handleAddTodo={handleAddTodo} />
            <ul>
                {todos.map((item)=>(
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        status={item.status}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
}