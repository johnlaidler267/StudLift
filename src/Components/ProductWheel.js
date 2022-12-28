import React from 'react';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';

function ProductWheel(props) {
    return (

        <Container fluid style={{
            width: "85%",
            margin: "0 auto"
        }}>
            <Card style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
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


