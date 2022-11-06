import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageWithButton from "./pages/ImageWithButton";

export default function App() {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/load-image-with-button" element={<ImageWithButton />} />
        </Routes>
      </Container>
    </>
  );
}
