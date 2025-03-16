import React from "react";
import { Figure, Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <Figure>
            <Figure.Image width={200} height={200} alt="SHERLINLONDON" src="https://images.pexels.com/photos/13047827/pexels-photo-13047827.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Figure.Caption>
              <h3>Welcome to Our Store</h3>
              <p>We offer the best products with high quality and affordable prices.</p>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Figure>
            <Figure.Image width="100%" alt="Store Image 1" src="https://images.pexels.com/photos/6044236/pexels-photo-6044236.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Figure.Caption>Our beautiful store interior.</Figure.Caption>
          </Figure>
        </Col>
        <Col md={6}>
          <Figure>
            <Figure.Image width="100%" alt="Store Image 2" src="https://images.pexels.com/photos/7679868/pexels-photo-7679868.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Figure.Caption>Our amazing collection of products.</Figure.Caption>
          </Figure>
        </Col>
      </Row>

      <Row className="mt-4 text-center">
        <Col>
          <h4>Contact Us</h4>
          <p>Email: support@ourstore.com</p>
          <p>Phone: +123 456 7890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;