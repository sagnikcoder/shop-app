import React from "react";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import  NavBar  from "../components/Navbar";
import ProcessSection from "../components/ProcessSection";
const Home = () =>(
    <div>
    <NavBar />
    <Jumbotron/>
    <ProcessSection/>
    <Footer />
    </div>
)

export default Home;