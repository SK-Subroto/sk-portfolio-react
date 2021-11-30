import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch('../projects.json')
            .then(res => res.json())
            .then(data => findProject(data))
    }, []);

    const findProject = (data) => {
        // find single service
        setProject(data.find(s => s.id === id));
    }

    return (
        <Container style={{ minHeight: '80vh', marginTop: '90px' }}>
            <Row className="mt-5">
                <Col lg="6" className="order-lg-0 order-1 mt-4 px-4">
                    <h4><b>Project Title:</b> {project.title}</h4>
                    <div>
                        <h4><b>Descriptions:</b></h4>
                        <ul>
                            {
                                project?.description?.map((d, i) => (
                                    <li>{d}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4><b>Technology: </b></h4>
                        {
                            project?.technology?.map((t, i) => (
                                <span>{t}, </span>
                            ))
                        }
                    </div>
                    <div>
                        <h4><b>Links: </b></h4>
                        {project?.link?.live ? <a className="me-3" href={project?.link?.live} target="_blank">Live Site</a> : ''}
                        {project?.link?.client ? <a className="me-3" href={project?.link?.client} target="_blank">Github Client</a> : ''}
                        {project?.link?.server ? <a className="me-3" href={project?.link?.server} target="_blank">Github Server</a> : ''}
                    </div>
                </Col>
                <Col lg="6" className="order-lg-1 order-0">
                    <div className="project-cover">
                        <img src={project.coverPhoto} className="img-fluid" alt="" />
                    </div>
                </Col>
            </Row>
            <div className="mt-5">
                <h4 className="text-center "><b>Screenshots: </b></h4>
                {
                    <Row xs={1} md={1} className="g-4">
                        {project?.screenshoot?.map((s, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={s} className="img-fluid border border-3" />
                                    {/* <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                            </Card.Body> */}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </div>
        </Container>
    );
};

export default ProjectDetails;