import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CompanyLogo from "../../../Assets/logo_nav.png";

export default function Header({ AboutUs, OurCore, OurSpeciality }) {
  return (
    <header fixed="top">
      <Navbar bg="light" variant="light" expand="xl" fixed="top">
        <Navbar.Brand href="/">
          <img
            src={CompanyLogo}
            className="ms-3"
            width={126}
            alt="CompanyLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() =>
                AboutUs.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="ms-3"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                OurCore.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="ms-3"
            >
              Our Core Values
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                OurSpeciality.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="ms-3"
            >
              Our Speciality
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
