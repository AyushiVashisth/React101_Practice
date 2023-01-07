import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";

function AllRoutes(){
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about-us" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/login" element={<Login/>} />
          </Routes>
      </div>
  )
}
function Home(){
  return (
      <div>
          <h1>Home Page</h1>
      </div>
  )
}
function Contact(){
  return (
      <div>
          <h1>Contact Page</h1>
      </div>
  )
}
function About(){
  return (
      <div>
          <h1>About Page</h1>
      </div>
  )
}
function Services(){
  return (
      <div>
          <h1>Services Page</h1>
      </div>
  )
}
function Login(){
  return (
      <div>
          <h1>Login Page</h1>
      </div>
  )
}
// console.log("APp")
function App() {
  return <BrowserRouter>
  {/* Add your code here */}
      <NavBar />
      <AllRoutes />
      {/* <h1>hii</h1> */}
  </BrowserRouter>;
}

export default App;
