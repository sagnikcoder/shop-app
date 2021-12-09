import React from "react";
import {Button, Modal, Form} from "react-bootstrap";
import Context from "../context/context";
import Formdata from "../script/Formdata";


const RegisterModal = () => (
  <Context.Consumer>
    {
      (context) => {
        
        return(<Modal show={context.data} onHide={context.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicRadio">
                <Form.Check type="radio" label="I am an Admin" />
              </Form.Group>
            </Form>
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
    }
  </Context.Consumer>
)

  export default RegisterModal;