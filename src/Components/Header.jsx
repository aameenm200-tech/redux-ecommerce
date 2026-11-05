import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { FaCartPlus } from "react-icons/fa";





function Header() {
  return (
    <Navbar style={{ backgroundColor:"#0B2B26"}} expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand><Link to={"/"} className='text-decoration-none fw-bold fs-3' style={{color:"#8EB69B"}}><FaShippingFast className='fs-2' /> Daily<span className='text-warning'>CART</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <input type='text' className='form-control' placeholder='search your products'/>
            </Nav.Item>
            <Link to={"/wishlist"} className='text-light text-decoration-none fw-bold ms-5'><FaHeart className='text-danger fs-3' /> Wishlist  <Badge pill bg="secondary">10</Badge></Link>
            <Link to={"/cart"} className='text-light text-decoration-none fw-bold ms-5'><FaCartPlus className='text-success fs-3' /> Cart  <Badge pill bg="secondary">10</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
