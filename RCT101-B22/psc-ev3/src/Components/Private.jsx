import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {Navigate} from "react-router-dom";

const Private =({children})=>{
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children;
};
export default Private;