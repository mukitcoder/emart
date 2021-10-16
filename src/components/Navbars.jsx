import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="text-decoration-none fw-bold fs-5 me-3 text-black-50" to="/home">Home</NavLink>
              <NavLink className="text-decoration-none fw-bold fs-5 me-3 text-black-50" to="/products">Products</NavLink>
              <NavLink className="text-decoration-none fw-bold fs-5 me-3 text-black-50" to="/about">About</NavLink>
              <NavLink className="text-decoration-none fw-bold fs-5 me-3 text-black-50" to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-secondary">
              {" "}
              <i className="fa fa-sign-in me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-secondary mx-3">
              {" "}
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-secondary">
              {" "}
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
