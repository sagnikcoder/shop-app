import React from "react";
import Button from "./Button";

const MenuItem=(props)=>(
    <div className="col-lg-4">
                <div className="card" style={{width: "18rem"}}>
                    <img src={props.src} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <div style={{display: "flex"}}>
                            <Button text="Update"/>
                            <Button text="Remove"/>
                            </div>
                        </div>
                </div>
            </div>
);

export default MenuItem;