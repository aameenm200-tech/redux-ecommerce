import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from "react-icons/fa";

function Header() {
  return (
    <Navbar style={{ backgroundColor:"#0B2B26"}} expand="lg" className="fixed-top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className=' fw-bold' href="#home"><FaShippingFast className='fs-2' /> Daily<span className='text-warning'>CART</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
