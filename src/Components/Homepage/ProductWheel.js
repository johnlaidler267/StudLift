//React components
import React from 'react';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';

function ProductWheel() {
    return (

        <Container fluid style={{
            width: "85%",
            margin: "0 auto"
        }}>
            <Card style={{ backgroundColor: "#CED5DF", width: "100%", height: "100%", border: 'none', color: 'white' }}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Card.Footer>Mens Hoodie #55</Card.Footer>
                                </Col>
                                <Col>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Card.Footer>Mens Hoodie #55</Card.Footer>
                                </Col>
                                <Col>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Card.Footer>Mens Hoodie #55</Card.Footer>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Card>
        </Container >
    );
}

export default ProductWheel;


