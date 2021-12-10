import React from "react";

import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import Button from "./Button.jsx";
import styled from "styled-components";
import RegisterModal from "./RegisterModal.js";
import Provider from "../context/provider";
import Context from "../context/context";



const LargeContainer = styled.div`
height: 150px;
`;
const Wrapper = styled.div`
padding: 30px 50px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #FAEDF0;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
    verticle-align:middle;
    border-style: none;
    margin:0;
    padding:0;
    height:80px;
    widht:100px;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Link = styled.nav`
    font-size:20px;
    padding:0px 20px;
`
const NavBar =() => (
    <LargeContainer>
        <Wrapper>
            <Left><Image src={process.env.PUBLIC_URL+'icon.png'} alt="..."/></Left>
            <Center>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><Link>Home</Link> </Nav.Link>
                            <Nav.Link href="#link"><Link>About</Link></Nav.Link>
                            <Nav.Link href="#link"><Link>Menu</Link></Nav.Link>
                            <Link><NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown></Link>
                            <Nav.Link href="#link"><Link>Contact</Link></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Center>
            <Right>
            <Provider>
                <Context.Consumer>
                    {
                        (context) => {
                        return(<Button text="Sign In" styleName="button2" onClick={context.handleShow} />)
                        }
                    }
                </Context.Consumer>
                <RegisterModal type="signup"/>
            </Provider>
            <Provider>
                <Context.Consumer>
                    {
                        (context) => {
                        return(<Button text="Sign Up" styleName="button1" onClick={context.handleShow} />)
                        }
                    }
                </Context.Consumer>
                <RegisterModal type="registration"/>
            </Provider>
            </Right>
        </Wrapper>
    </LargeContainer>
)

export default NavBar;