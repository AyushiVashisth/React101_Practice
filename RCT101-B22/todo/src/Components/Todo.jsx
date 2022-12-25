import React from "react";
//maintain todo list data -> [ {}, {}, {}, newItem]
// when user clicks on add button; we add this new todo
// item created to this todo list data;
/*
  {
    title: 'Eat',
    status: false,
    id: 1
  }
*/
function Todo(){
    const [text, setText] = React.useState("");  // inputbox value
    const [todos, setTodos] = React.useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        // Javascript
        const newItem = {
            title: text,
            status: false,
            id: Date.now() + text + Math.random(),
        };
        const todoListAfterNewItemAddition = [ ...todos, newItem];
        setTodos(todoListAfterNewItemAddition);
        setText("");
    };

    return (
        <div>
            <div>
                <input 
                    placeholder="Add Todo" 
                    value={text} 
                    onChange={handleChange} 
                />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            <ul>
                {todos.map((item)=> (
                    <li key={item.id}>
                        {item.title} - {item.status ? "Completed" : "Not Completed"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;