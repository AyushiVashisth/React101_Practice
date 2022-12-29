import Button from "./Button"
export default function TodoList({title,status,id,toggleTodo,deleteTodo}){
    const styleObj={border:"1px solid red",
}
    return(
        <div style={{styleObj}}>
            <h3>{title}   {status?"Completed":"Not Completed"}</h3>
            <Button text="Toggle" id={id} handleClick={toggleTodo}/>
            <Button text="Delete" id={id} handleClick={deleteTodo}/>
        </div>
    )
}