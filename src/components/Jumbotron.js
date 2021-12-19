import React from "react";
import jumboimage from "../resources/jumbotron-image1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
const Jumbotron = () =>{
    return(
        <>
            <div>
                <img src ={jumboimage} alt="..." className="banner"/>
                
                <h1 className="title title-upper">Welcome to</h1>
                <h1 className="title title-lower">Ambrosia</h1>
            </div>
        
           
        </>
    )
}

export default Jumbotron;