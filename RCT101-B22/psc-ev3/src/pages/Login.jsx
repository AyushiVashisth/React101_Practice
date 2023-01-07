import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
const Login = ()=>{
    const {login, isAuth} = useContext(AuthContext);
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");

    const handleLogin = () =>{
        const userDetails = {
            email,
            password,
        };
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(userDetails),
            headers:{
                "Content-type":"application/json",
            },
        }).then((res) => res.json())
        .then((json)=>{
            // console.log(json);
            login(json.token);
        })
        .catch((err)=>{
            console.log("error",err);
        });
       
    };
    if(isAuth){
        return <Navigate to="/products"/>
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}
export default Login;