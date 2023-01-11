import { useState } from "react";

const AddTodo=({ handleAddTodo })=>{
    const [ text, setText ] = useState("");
    return (
        <div>
            <input 
                type="text" 
                value={text} 
                placeholder="ADD TODO" 
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={()=>handleAddTodo(text)}>ADD TODO</button>
          </div>
    )
}
export default AddTodo