import React from "react";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import  NavBar  from "../components/Navbar";
import AdminUpdate from "../components/AdminUpdate";
const AdminMenu =()=>(
    <div>
        <NavBar/>
        <Jumbotron/>
        <AdminUpdate/> 
        <Footer/>
    </div> 
);

export default AdminMenu;