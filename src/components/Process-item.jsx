import React from "react";
const Processitem=(props)=>(
    <div className="col-lg-4 col-md-8">
        <div className="how-it-work-item mt-30">
            <h4 className="title">
            <img src={props.src}/>
            {props.title}
            </h4>
            <p>{props.body}</p>
        </div>
    </div>
)

export default Processitem;