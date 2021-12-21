import React from "react";
import AdminOrders from "../components/AdminOrders";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import  NavBar  from "../components/Navbar";

const AdminHome =()=>(
    <div>
        <NavBar/>
        <Jumbotron/>
        <AdminOrders/>
        <Footer/>
    </div> 
);

export default AdminHome;