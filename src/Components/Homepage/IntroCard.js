//React components
import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

// Icons
import { AiFillInstagram, AiFillMail, AiFillTwitterCircle, AiOutlineStar } from 'react-icons/ai'
import { GiConverseShoe, GiTankTop, GiTShirt } from 'react-icons/gi'

//Photos
import intro from '/Users/johnnylaidler/studentlifter/src/Photos/intro.png';

function IntroCard(props) {
    return (

        <Container fluid style={{
            width: "90%",
            margin: "0 auto"
        }}>
            <Card style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
                <Row>
                    <Col xs={12} md={4}>
                        <Card style={{ border: "none", padding: "5px", margin: "5px" }}>
                            <Row>
                                <Col xs={1}>
                                    <AiFillInstagram />
                                </Col>
                                <Col xs={1}>
                                    <AiFillMail />
                                </Col>
                                <Col xs={1}>
                                    <AiFillTwitterCircle />
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h7>StudentLifter Alex Pictured</h7>
                            <h1>Become a Student Lifter.</h1>
                            <p> Welcome to Student Lifter, where you'll find high-quality fitness apparel and accessories for students and young professionals. Our products are designed to be both functional and stylish, so you can look and feel your best while working towards your fitness goals. We offer a wide range of products for both men and women, including workout clothes, shoes, and gym bags. Our commitment to providing affordable, high-quality products means you can focus on reaching your full potential, without breaking the bank. We hope you'll take a look at our selection and find something that fits your style and needs. </p>
                            <Button variant="outline-secondary">ABOUT US</Button>
                            <br />
                            <br />

                            <h6>FEATURED PRODUCTS <AiOutlineStar /></h6>
                            <p>Check out our top picks for the best products to enhance your daily life.</p>
                            <br></br>
                            <Row>
                                <Col>
                                    <Card style={{ padding: "5px", border: "none", width: "120%" }}>
                                        <GiConverseShoe style={{ height: "90%", width: "90%" }} />
                                        <br></br>
                                        <br></br>
                                        <h9>SL Converse</h9>
                                        <h8 style={{ display: "flex", justifyContent: "center" }}>$19.99</h8>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ padding: "2px", border: "none", width: "120%" }}>

                                        <GiTankTop style={{ height: "90%", width: "90%" }} />
                                        <br></br>
                                        <br></br>
                                        <h9>SL Tank</h9>
                                        <h8 style={{ display: "flex", justifyContent: "center" }}>$49.99</h8>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ padding: "2px", border: "none", width: "120%" }}>

                                        <GiTShirt style={{ height: "90%", width: "90%" }} />
                                        <br></br>
                                        <br></br>
                                        <h9>SL Tee</h9>
                                        <h8 style={{ display: "flex", justifyContent: "center" }}>$29.99</h8>
                                    </Card>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Button variant="dark" style={{ width: "50%" }}>View All Products</Button>
                        </Card>
                        <br />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Img variant="right" src={intro} alt="My Image" style={{ width: "100%", height: "100%", overflow: "visible" }} />
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Container >
    );
}

export default IntroCard;


