import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Nav, Navbar, Container, } from 'react-bootstrap'




const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Hello Lagos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link className='lap' to ='/'>Home</Link>
      <Link className='lap' to= '/About'>About Lagos</Link>
      <Link className='lap' to ='/Contact'>Contact us</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}

export default Navigation