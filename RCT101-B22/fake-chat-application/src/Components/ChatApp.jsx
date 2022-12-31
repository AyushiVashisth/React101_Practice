import React from "react";
import createConnection from "../Utilites/Chat";
import {user} from "../Utilites/Chat";
import Contacts from "./Contacts";


function ChatApp(){
    const[message,setMessage]=React.useState([ ]);
    const [subscribedTo,setSubcribedTo]=React.useState(user[0]);
    React.useEffect(()=>{
        // const connection= createConnection(subscribedTo);
        // console.log(connection)
        const {listen,unsubscribe}= createConnection(subscribedTo);
        listen((message)=>{
            console.log(message)
            setMessage((prevMessages)=>[...prevMessages,message])
        });
        const cleanUP=()=>{
            setMessage([]);
            unsubscribe();
        }
        return cleanUP;
        /*
        return()=>{
            setMessage([])
            unsubscribe()
        }
        */
    },[subscribedTo])

    return(
        <div>
            <h1>Contacts</h1>
            <Contacts user={user} active={subscribedTo} onChange={(user)=>setSubcribedTo(user)}/>
            <hr />
            {message.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </div>
    )
}
export default ChatApp