import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PostNavbar from './PostNavbar';
import SingleCard from './SingleCard';

const CardSection = () => {
    return (
        <Row>
             <Col md={10} className="mx-auto">
             <PostNavbar/>
            <SingleCard/>
             </Col>
        </Row>
    );
};

export default CardSection;