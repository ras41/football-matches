import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="glass-navbar px-4 py-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white fs-4 fw-bold">
          ⚽ SoccerVerse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" className="bg-light" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item-link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/matches" className="nav-item-link">
              Live Matches
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
