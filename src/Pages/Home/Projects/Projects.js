import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const handleDetails = (id) => {
        history.push(`/project/${id}`)
    }

    return (
        <Container id="project">
            <div className="project-container">
                <div className="text-center">
                    <h2 className="project-head">Projects</h2>
                    <p>My technical level</p>
                </div>
                <div className="text-center">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            projects.map((project, idx) => (
                                <Col>
                                    <Card className="h-100">
                                        <div className="project-cover">
                                            <Card.Img variant="top" src={project.coverPhoto} className="img-fluid" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="d-flex justify-content-between">
                                                <div>{project.title}</div>
                                                <Button onClick={() => handleDetails(project.id)} className="btn-sm">View Details</Button>
                                            </Card.Title>
                                            <Card.Text>
                                                <b>Technology Used:</b>
                                                <div className="tech-container">
                                                    {
                                                        project.technology.map((t, i) => (
                                                            <div className="tech-stack">{t}</div>
                                                        ))
                                                    }
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Projects;