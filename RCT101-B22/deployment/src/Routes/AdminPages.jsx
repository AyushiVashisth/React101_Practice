import { Navigate } from "react-router-dom";

function AdminPage(){
    const isAdmin = false;

    if(!isAdmin){
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Admin Page</h1>
        </div>
    )
}

export default AdminPage;