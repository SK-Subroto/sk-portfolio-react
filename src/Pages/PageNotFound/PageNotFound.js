import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { BsHouseDoorFill } from "react-icons/bs";
import { useHistory } from 'react-router';
import './PageNotFound.css';

const PageNotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('./home');
    }
    return (
        <Container style={{ minHeight: '80vh', marginTop: '90px' }}>
            <div className="page-not-found-container">
                <h2>Page Not Found</h2>
                <h1 style={{fontSize: '8rem'}}>404</h1>
                <Button variant="primary" className="primary-background" onClick={handleGoHome}> <BsHouseDoorFill className="mb-1" /> Go to homepage</Button>
            </div>
        </Container>
    );
};

export default PageNotFound;