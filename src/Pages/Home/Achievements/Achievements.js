import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Achievements.css';

const Achievements = () => {

    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        fetch('../achievements.json')
            .then(res => res.json())
            .then(data => setAchievements(data))
    }, []);

    return (
        <Container id="achievement">
            <div class="achievement-container">
                <div class="text-center">
                    <h2 class="achievement-head">Achievements</h2>
                    <p>My technical achievements</p>
                </div>
                <div className="text-center">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {achievements.map((achievement, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={achievement.img} />
                                    <Card.Body>
                                        <div class="card-badge">{achievement.position}</div>
                                        <Card.Title>{achievement.title}</Card.Title>
                                        <Card.Text>
                                            {achievement.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Achievements;