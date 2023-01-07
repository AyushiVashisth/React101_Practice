import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = ()=>{
    const {token,isAuth} = useContext(AuthContext);
    return (
        <div>
            <h1>Home</h1>
            <h1>Token: {token}</h1>
        </div>
    )
}
export default Home;