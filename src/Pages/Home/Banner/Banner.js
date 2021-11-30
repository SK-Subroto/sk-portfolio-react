import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import './Banner.css';
import { init } from 'ityped';

const Banner = () => {

    useEffect(() => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Developer', 'Software Engineer'] })
    }, [])

    return (
        <Container id="home">
            <div className="home-container">
                <Row>
                    <Col lg="6" className="text-center mt-5 mt-lg-0">
                        <img src="https://sk-subroto.github.io/portfolio/assets/img/sks.jpeg" className="home-img" alt="" />
                    </Col>
                    <Col lg="6" className="mt-3 mt-lg-0">
                        <Col className="fs-1 social-media">
                            <a href="https://github.com/SK-Subroto" target="blank"><FaGithubSquare style={{ color: '#464646' }} /></a>
                            <a href="https://twitter.com/sk_subroto" target="blank"><FaTwitterSquare style={{ color: '#5BA4D6' }} /></a>
                            <a href="https://www.linkedin.com/in/subroto-karmokar-76461ab5/" target="blank"><FaLinkedin style={{ color: '#2764AC' }} /></a>
                            <a href="https://www.facebook.com/subroto.sks/" target="blank"><FaFacebookSquare style={{ color: '#1873EB' }} /></a>
                        </Col>
                        <div>
                            <h1 className="home-name">Hi, I'm Subroto</h1>
                            <h3 className="home-designation pt-2" id="myElement"></h3>
                            <p className="home-note">I am professional at web development and computer programming. I have pretty
                                good knowledge about machine learning and cyber security. Nowadays, I'm working on fullstack web
                                development.</p>
                            <Button variant="primary" className="btn-lg">
                                <a style={{ textDecoration: 'none', color: 'white' }} href="https://drive.google.com/file/d/1h_EUOqsIt-oQ2Xaii-QYhVKLs54bPFiA/view?fbclid=IwAR2Xjg2P3aVfQIVmzFAzfITrj4UNEizfwBbrEMcYJbpUErWAQxWEPmqx-0c"
                                    target="blank">Resume</a>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Banner;