import { Route, Routes} from "react-router-dom";
import AboutPage from "./AboutPages";
import AdminPage from "./AdminPages";
import ContactPage from "./ContactPage"
import HomePage from "./HomePage";
import SingleUserPage from "./SingleUserPage";
import UsersPage from "./UsersPage";
import SuccessPage from "./SuccessPage";

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/users" element={<UsersPage/>} />
                <Route path="/users/:id" element={<SingleUserPage/>} />
                <Route path="/admin" element={<AdminPage/>} />
                <Route path="/success-page" element={<SuccessPage/>} />
            </Routes>
        </div>
    )
}

export default AllRoutes;