import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Navbar
        expand="lg"
        bg="success"
        variant="dark"
        className="position-sticky top-0"
        style={{ zIndex: 10 }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <h4>Homework Lesson 2</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  to="/load-image-with-button"
                  className="text-decoration-none"
                >
                  <h6 className="text-light">Load image with button</h6>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="" className="text-decoration-none">
                  <h6 className="text-light">Load image at first</h6>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="pt-3">
        <Outlet />
      </Container>
    </>
  );
}
