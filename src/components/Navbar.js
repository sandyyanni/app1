import React, { Component } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

  
  
 


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
                        <Nav.Link className="sec sec:after sec:hover:after" as={Link}to={"/"}>Home</Nav.Link>
                        <Nav.Link className="sec sec:after sec:hover:after" href="/#about">About</Nav.Link>
                        <Nav.Link className="sec sec:after sec:hover:after" as={Link}to={"/services"}>Services</Nav.Link>
                        <Nav.Link className="sec sec:after sec:hover:after" href="/#contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
            
        )
    }
}