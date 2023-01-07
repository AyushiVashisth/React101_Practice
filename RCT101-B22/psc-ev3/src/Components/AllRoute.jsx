import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Product from "../pages/Product"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"
import SingleProduct from "../pages/SingleProduct";
import Private from "./Private";

console.log("ALlRoute")

const AllRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route 
                    path="/products" 
                    element={
                        <Private>
                            <Product/>
                        </Private>
                    } 
                />
                <Route 
                path="/products/:product_id" 
                element={
                    <Private>
                        <SingleProduct/>
                    </Private>
                } 
                />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
};
export default AllRoute;