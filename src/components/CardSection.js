import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PostNavbar from './PostNavbar';
import CardData from './CardData';

const CardSection = () => {
    return (
        <Row>
             <Col md={10} className="mx-auto">
             <PostNavbar/>
            <CardData/>
             </Col>
        </Row>
    );
};

export default CardSection;