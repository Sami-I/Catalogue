import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const SiteNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Catalogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Mens" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/mens">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="/mens/shoe">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="/mens/jacket">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="/mens/jumper">Jumpers</NavDropdown.Item>
              <NavDropdown.Item href="/mens/t-shirt">T-Shirts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Womens" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/womens">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="/womens/shoe">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="/womens/jacket">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="/womens/jumper">Jumpers</NavDropdown.Item>
              <NavDropdown.Item href="/womens/t-shirt">
                T-Shirts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
