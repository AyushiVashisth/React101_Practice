import {useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

export const Dashboard = () => {
    let  {token}=useContext(AuthContext);
    // token="ABCD"
    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" >LOGOUT</button>
        </div>
    )
}
