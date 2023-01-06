import { useContext, useState } from "react";
import {AuthContext} from "../Context/AuthContextProvider"

const initialData={
    email:"",
    password:""
}

export default function Login() {
    const[userData,setUserData]=useState(initialData);
    const {email,password}=userData;
    const {handletoken,handleLoading,handleError} = useContext(AuthContext)

    const getToken = (userData) => {
        return fetch(`https://reqres.in/api/login`,{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res) => res.json());
    }

    const postRequest=async(userData)=>{
        const res = await getToken(userData);
        if(res.token){
            handletoken(res.token);
            console.log("token",res.token)
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchData()
    }
    console.log(userData); 
    
    const fetchData=async()=>{
        handleLoading(true);
        handleError(false);
        try{
            const res=await postRequest(userData)
            handleLoading(false)
        }catch(err){
            handleLoading(false)
            handleError(true)
            console.log(err)
        }
    }
    return (
        <div>
            <form data-testid = "auth_form"  onSubmit={handleSubmit}>
                <input
                    type = "email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    data-testid = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    type = "password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input type = "submit"/>
            </form>
        </div>
    )
}
