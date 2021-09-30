import React, { Component } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import {
    Link as LinkR
  } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

  
  
 


export default class NavbarTop extends Component {
    render() {
        return (
          
            <div>
                <Navbar bg="light" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand className="App-logo box box:hover" href="#home">SZ</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse  className="justify-content-end" id="navbarScroll">
                            <Nav
                            className="mr-auto my-2 my-lg-0"
                            navbarScroll
                            >
                        <Nav.Link className="sec sec:after sec:hover:after" as={LinkR}to={"/"}>Home</Nav.Link>
                        <Nav.Link className="sec sec:after sec:hover:after" as={LinkS}to={"about"}>About</Nav.Link>
                        <Nav.Link className="sec sec:after sec:hover:after" as={LinkR}to={"/services"}>Services</Nav.Link>
                        <Nav.Link className="sec sec:after sec:hover:after" as={LinkS}to={"contact"}>Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
             
            
        )
    }
}