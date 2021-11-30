import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container id="about" fluid style={{ backgroundColor: '#8B7CD8' }}>
            <div className="about-container">
                <div className="text-center">
                    <h2 className="about-head">About Me</h2>
                    <p>My introduction</p>
                </div>
                <Container>
                    <Row>
                        <Col lg="4" className="text-center">
                            <img src="https://sk-subroto.github.io/portfolio/assets/img/subroto-about.jpg" alt="" className="img-fluid" />
                        </Col>
                        <Col lg="8">
                            <div className="text-white">
                                <p className="mt-2">Hello,</p>
                                <p class="about-note">I am a <strong>Software Engineer</strong> graduate from <strong>Daffodil International University</strong>. I have sound knowledge of web development. I
                                    did some real-life projects using JavaScript, React js, Node. js and Python, Django. I have professional certification
                                    in web development as well.</p>

                                <hr className="about-hr" />
                                <p><b>Name:</b>&nbsp; Subroto Karmokar</p>
                                <hr className="about-hr" />
                                <p><b>Degree:</b>&nbsp; B.Sc in Software Engineering</p>
                                <hr className="about-hr" />
                                <p><b>Gender:</b>&nbsp; Male</p>
                                <hr className="about-hr" />
                                <p><b>Status:</b>&nbsp; Single</p>
                                <hr className="about-hr" />
                                <p><b>Nationality:</b>&nbsp; Bangladeshi</p>
                                <hr className="about-hr" />

                                <Button variant="" className="btn-lg"><a href="#contact">Contact Me</a></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default About;