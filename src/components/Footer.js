import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const date = () =>{
    var currentTime = new Date();
    const currentDate = currentTime.getFullYear();
    return currentDate;
}

const Footer = () =>(
    <footer className="footer-block">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
                    <h6>&copy; {date()} Rondhon All Right Reserved</h6>
                </div>
            </div>
        </div>

    </footer>
)

export default Footer;