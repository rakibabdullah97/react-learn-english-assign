import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container>
                <p className="m-0 p-0 text-light w-75 mx-auto">Rights Reserved to Rakib Abdullah</p>
            </Container>
        </Navbar>
    );
};

export default Footer;