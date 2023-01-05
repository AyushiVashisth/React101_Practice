import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Users from "../pages/Users";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    )

}
export default AllRoutes;