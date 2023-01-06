import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function Login(){
    const { login, isAuth } = useContext(AuthContext);

    const handleLogin = () => {
        login(); //
    }

    if(isAuth){
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>Probably some info about the websites...</h1>

            <div>
                <h1>LOGIN SECTION</h1>
                <button onClick={handleLogin}>LOGIN</button>
            </div>
        </div>
    )
}

export default Login;