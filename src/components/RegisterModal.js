import React from "react";
import {Button, Modal} from "react-bootstrap";
import Context from "../context/context";
import Formdata from "../script/Formdata";
import Signin from "../script/Signin";
import RegistrationForm from "./RegistrationForm";
import SinginForm from "./SinginForm";


const RegisterModal = (props) => (
  <Context.Consumer>
    {
      (context) => {
        if(props.type==="registration"){
          return(<Modal show={context.data} onHide={context.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <RegistrationForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={context.handleClose}>
              Close
            </Button>
            <Button variant="primary" style={{backgroundColor: "#EC255A"}} onClick={()=>{Formdata(); context.handleClose();}}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>)

        }
        else if(props.type === "signup"){
          return(<Modal show={context.data} onHide={context.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <SinginForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={context.handleClose}>
              Close
            </Button>
            <Button variant="primary" style={{backgroundColor: "#EC255A"}} onClick={()=>{Signin(); context.handleClose();}}>
              Sign In
            </Button>
          </Modal.Footer>
        </Modal>)
        }
        
        
      }
    }
  </Context.Consumer>
)

  export default RegisterModal;