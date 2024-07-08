import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">GloryTaste</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>

          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="shcart" />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
