import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const SiteNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Catalogue</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Mens" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/genders/mens">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="/genders/mens/shoes">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/mens/jackets">
                Jackets
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/mens/jumpers">
                Jumpers
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/mens/t-shirts">
                T-Shirts
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Womens" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/genders/womens">
                Shop All
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/womens/shoes">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/womens/jackets">
                Jackets
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/womens/jumpers">
                Jumpers
              </NavDropdown.Item>
              <NavDropdown.Item href="/genders/womens/t-shirts">
                T-Shirts
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/categories/jackets">Jackets</Nav.Link>
            <Nav.Link href="/categories/shoes">Shoes</Nav.Link>
            <Nav.Link href="/categories/jumpers">Jumpers</Nav.Link>
            <Nav.Link href="/categories/t-shirts">T-Shirts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
