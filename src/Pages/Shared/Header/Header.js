import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const history = useHistory();

    const handleHomePage = () => {
        history.push('/home');
    }

    const activeStyle = {
        fontWeight: "bold",
        color: "#00095E",
        borderBottom: "solid 2px #00095E"
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <Navbar bg="white" expand="lg" fixed="top" className={scrolled ? "shadow py-3" : "py-3"}>
                <Container fluid>
                    <Navbar.Brand onClick={handleHomePage} style={{ cursor: 'pointer' }} className="d-flex align-items-center fs-3 primary-color">
                        <div className="logo me-2">S</div>
                        <span className="fw-bold" style={{ color: '#1F3B64' }}>Subroto</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center fw-bold primary-color" style={{ fontSize: 18 }}>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#skill">Skills</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#project">Project</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#achievement">Achievements</Nav.Link>
                            <Nav.Link as={HashLink} activeStyle={activeStyle} to="/home#contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div style={{ marginTop: 100 }}>

            </div> */}
        </>
    );
};

export default Header;