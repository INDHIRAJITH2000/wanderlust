import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/sign.png";

const WanderlustNavbar = () => {
  return (
    <Navbar  expand="md" className="navbar-header" collapseOnSelect>
        {/* fixed="top" */}
      <Container>
        <Navbar.Brand href="#home">
          Wanderlust
          {/* <img src={logo} height={100} alt="" srcset="" /> */}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#destinations">Gallery</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WanderlustNavbar;
