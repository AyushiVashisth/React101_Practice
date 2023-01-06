import React from 'react'
import Login from './Components/Login'
import { Dashboard } from './Components/Dashboard';
// import { AuthContext } from './Context/AuthContextProvider';

export default function App() {
  // const {isAuth}=React.useContext(AuthContext);
  return (
    <div>
        <Login />
       <Dashboard/>
    </div>
  )
}
