import { useState,useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import {Navigate} from "react-router-dom"


const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [data, setData] = useState(initialState);
  const{isAuth,login}=useContext(AuthContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(data);
  };
  const upLoadData = (data) => {
    return fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  const fetchData = async (data) => {
    try {
      const res = await upLoadData(data);
      if(res.token){
          console.log(res.token)
        login();
      }
    } catch (err) {

    }
  };
console.log(isAuth)
  return isAuth?(<Navigate to="/"/>):(
    <div>
      <form onSubmit={handleSubmit} className="auth_form">
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          name="email"
          onChange={handleChange}
          type="email"
          className="email"
          placeholder="Enter Email"
        />
        <br />
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          name="password"
          onChange={handleChange}
          type="password"
          className="password"
          placeholder="Enter password"
        />
        <br />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}