import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container fluid>
            <Row>
                <footer className="text-center">
                    © {new Date().getFullYear()} Developed By Subroto Karmokar
                </footer>
            </Row>
        </Container>
    );
};

export default Footer;