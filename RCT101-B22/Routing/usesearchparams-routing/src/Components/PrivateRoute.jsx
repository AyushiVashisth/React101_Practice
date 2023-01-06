import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

// 1. if a user is authentication; allow user to use the page;
// 2. if a user is not authenticated; redirect user to homepage;

// 3. Consumer auth context ( useContext, AuthContext )
function PrivateRoute({children}){
    const {isAuth} = useContext(AuthContext);
    // isAuth value will be probably from context API wherein you'll maintain isAuth status;

    if(!isAuth){
        return <Navigate to="/" />;
    }
    return children;
}

export default PrivateRoute;

// 1. PrivateRoute is a component
// 2. whatever exists as children to PrivateRoute; it's accessible when isAuth is true; also user will be redirected to homepages.