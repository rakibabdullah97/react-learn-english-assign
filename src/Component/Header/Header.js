import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#">Learn English</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <NavLink className="text-light me-4 text-decoration-none" to="/home">Home</NavLink>
                <NavLink className="text-light me-4 text-decoration-none" to="/services">Services</NavLink>
                <NavLink className="text-light me-4 text-decoration-none" to="/blog">Blog</NavLink>
                <NavLink className="text-light me-4 text-decoration-none" to="/aboutus">About Us</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;