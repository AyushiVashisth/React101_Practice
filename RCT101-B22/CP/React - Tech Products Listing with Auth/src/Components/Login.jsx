import { useContext, useState } from "react";
import {AuthContext} from "../Context/AuthContextProvider"
import axios from "axios";

export default function Login() {
    const[userData,setUserData]=useState("");
    const [token, setToken] = useState("");
    const [storeUserInfo,setStoreUserInfo]=useState([]);
    const {email,password}=userData;
    const {handleAuth,handleLoading,handleError,handleToken}=useContext(AuthContext);
    // console.log(isAuth,isLoading,error,handleAuth,handleLoading,handleError)

    
    handleToken(token);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
    }
    const handleSubmit=(e) => {
        let initialData={
            email,
            password
        }
        e.preventDefault();
        // setStoreUserInfo({...storeUserInfo,userData})
        uploadData()
        postRequest(token);
        // console.log(initialData)
    }
    console.log(userData);

    // const obj={email: 'atharva1999@gmail.com', password: '52345'}
    
    const postRequest=(text)=>{
    //     fetch("https://reqres.in/api/login",{
    //         method:"POST",
    //         body:JSON.stringify(text),
    //         headers:{
    //             "Content-Type":"application/json"
    //         }
    //     }).then((res)=>res.json())
    //     .then((res)=>{setToken(res.data.token)})
    //     .catch((e)=>console.log("error is",e));
    //}
    


    // const postRequest=async()=>{
    //     axios.post("https://reqres.in/api/login",{email,password})
    //        .then(res=>setToken(res.data.token))
    //        .catch(err=>{
    //             console.log(err);
    //         });



    //     const res=await fetch(`https://reqres.in/api/login`,{
    //         method:'POST',
    //         body:JSON.stringify(initialData),
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     });
    //     const resData = await res.json();
    //     console.log(resData.data.token)
    }
    const uploadData=async()=>{
        handleLoading(true);
        handleError(false);
        try{
            // const res=await postRequest()
            console.log(res)
            // setToken(res.data.token)
            handleLoading(false)
            handleAuth(true)
        }catch(err){
            handleAuth(false)
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
