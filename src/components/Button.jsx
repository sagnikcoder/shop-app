import React from "react";
import './Button.css';

const Button = (props) => (
    
    <button className={"button "+props.styleName} onClick={props.onClick}>{props.text}</button>
)

export default Button;