import { useState } from "react";

function AddTodo ({handleAddTodo}) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const onClick = () => {
        handleAddTodo(text);
        setText("");
    };

    return (
        <div>
            <input value={text} type="text" onChange={handleChange}/>
            <button onClick={onClick}>ADD</button>
        </div>
    );
};

export default AddTodo;