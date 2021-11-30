import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm('mayvwdyq');
    if (state.succeeded) {
        document.getElementById('notification').innerHTML = 'Email successfully send! Thank you';
        document.getElementById('contact-form').reset();
    }

    return (
        <Container id="contact" fluid style={{ backgroundColor: '#8B7CD8' }}>
            <div className="contact-container">
                <div className="contact-head">
                    <h2 className="">Contact Me</h2>
                    <p>Get in touch</p>
                </div>
                <Row className="contact-detail">
                    <Col lg="6">
                        <div class="mb-4">
                            <FaPhoneAlt className="mb-1 me-2 " />
                            <span class="h6">Call me</span>
                            <p>+8801785817353</p>
                        </div>
                        <div class="mb-4">
                            <FaEnvelope className="mb-1 me-2 " />
                            <span class="h6">Email</span>
                            <p>subroto.sks@gmail.com</p>
                        </div>
                        <div class="mb-4">
                            <FaMapMarkerAlt className="mb-1 me-2 " />
                            <span class="h6">Location</span>
                            <p>Zigatola, Dhanmondi, Dhaka-1206</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <fieldset>
                                <div class="mb-3 row">
                                    <div class="col">
                                        <input type="text" class="form-control" name="name" placeholder="Name" required />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" name="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" name="subject" placeholder="Title" required />
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" rows="5" name="message" placeholder="Message" required></textarea>
                                </div>
                                <button onclick="document.getElementById('contact-form').submit();document.getElementById('contact-form').reset();" type="submit" class="btn btn-default">Send <i
                                    class="far fa-paper-plane"></i></button>
                            </fieldset>
                            <div id="notification" className="text-center"></div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default Contact;