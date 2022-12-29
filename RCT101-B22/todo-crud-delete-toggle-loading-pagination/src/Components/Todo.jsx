import { useState,useEffect } from "react"
import TodoList from "./TodoList";
export default function Todo(){
    const[text,setText]=useState("");
    const[todo,setTodo]=useState([]);
    const[loading,setLoading]=useState(false);
    const[err,setErr]=useState(false);
    const baseURL=`https://global-c6lp.onrender.com/api/todo`;

    const getData=()=>{
        return fetch(`${baseURL}?_limit=10`).then((res)=>(res=res.json()))
    }
    const getTodos= async()=>{
        setErr(false);
        setLoading(true)
        try{
            const data=await getData();
            console.log(data);
            setTodo(data);
            setLoading(false);
        }catch(err){
            setErr(true);
            console.log("error is ",err)
        }
    }
    useEffect(()=>{
        getTodos()
    },[])
    const deleteTodo=async(id)=>{
        await fetch(`https://global-c6lp.onrender.com/api/todo/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        })
        console.log("i am here")
        getTodos()
    }
    const toggleTodo=async(id)=>{
        let newUpdate= await fetch(`${baseURL}/${id}`);
        newUpdate=await newUpdate.json();
        const newData = {...newUpdate,status:!newUpdate.status}
        await fetch(`${baseURL}/${id}`,{
            method:"PATCH",
            body:JSON.stringify(newData),
            headers:{
            "Content-Type":"application/json"
            }
        })
        getTodos()
    }

    const handelnput=(e)=>{
    const v=e.target.value
        setText(v)
    }

    const handleAddInput=async()=>{
        const obj={
            title:text,
            status:false,
        };
        try{
            let res=await fetch(`${baseURL}`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            res=res.json();
        }catch(err){
            console.log(err)
        }
        setText("")
        getTodos()
    }
    return(
        <>
        <div>
            <input type="text" value={text}  onChange={handelnput}/>
            <button onClick={handleAddInput}>Add TODO</button>
        </div>
        <div>
            {err?"Opps an error occured":loading?"Please wait data is loading":
                    todo.map(({id,title,status})=>(
                    <div key={id}>
                        <TodoList key={id} title={title} status={status} id={id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                    </div>
                ))
            }
        </div>
        </>
    )
}