import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImg1 from '../img/Rectangle 5 (1).png'
const SingleCard = () => {

  return (
    <Row >
        <Col md={7}>
        <Card style={{ width: "" }}>
      <Card.Img variant="top" src={cardImg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col >
        <Col md={3}>
          
        </Col>
    </Row>
  );
};

export default SingleCard;
