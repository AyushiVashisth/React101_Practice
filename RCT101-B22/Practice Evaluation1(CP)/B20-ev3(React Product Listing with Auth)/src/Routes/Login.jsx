import { useContext, useState } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import {AuthContext} from '../Context/AuthContext'


function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  const {authState,loginUser}=useContext(AuthContext);
  const navigate=useNavigate(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({email,password})
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.token){
        loginUser(res.token)
        authState.isAuth=true;
        console.log(res.token);
        <Navigate to='/dashboard'/>
         navigate("/dashboard")
        }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email"
            onChange={e=>setEmail(e.target.value)} value={email}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={e=>setPassword(e.target.value)} 
              value={password}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" 
           disabled={loading} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;