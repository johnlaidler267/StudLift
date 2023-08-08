//custom styling
import './Homepage.css';

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
        <div className='background'>

            <Card className='intro-card-bg'>

                <Row >

                    <Col xs={12} md={4}>

                        <Card className='intro-card'>
                            <Row className='social-links'>
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

                            <div className='header-text'>
                                <h7>StudentLifter Alex Pictured</h7>
                                <h1><b>Become a Student Lifter.</b></h1>
                                <p> Welcome to Student Lifter, where you'll find high-quality fitness apparel and accessories for students and young professionals. Our products are designed to be both functional and stylish, so you can look and feel your best while working towards your fitness goals. We offer a wide range of products for both men and women, including workout clothes, shoes, and gym bags. Our commitment to providing affordable, high-quality products means you can focus on reaching your full potential, without breaking the bank. We hope you'll take a look at our selection and find something that fits your style and needs. </p>
                                <Button className='about-us-btn'>ABOUT US</Button>
                            </div>

                            <div className='featured-products'>
                                <h6>FEATURED PRODUCTS <AiOutlineStar /></h6>
                                <p>Check out our top picks for the best products to enhance your daily life.</p>
                                <br></br>

                                <Row>

                                    <Col>
                                        <Card className='featured-product-card'>
                                            <GiConverseShoe style={{ height: "90%", width: "90%" }} />
                                            <br></br>
                                            <br></br>
                                            <h9>SL Converse</h9>
                                            <h8 style={{ display: "flex", justifyContent: "center" }}>$19.99</h8>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Card className='featured-product-card'>

                                            <GiTankTop style={{ height: "90%", width: "90%" }} />
                                            <br></br>
                                            <br></br>
                                            <h9>SL Tank</h9>
                                            <h8 style={{ display: "flex", justifyContent: "center" }}>$49.99</h8>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Card className='featured-product-card'>

                                            <GiTShirt style={{ height: "90%", width: "90%" }} />
                                            <br></br>
                                            <br></br>
                                            <h9>SL Tee</h9>
                                            <h8 style={{ display: "flex", justifyContent: "center" }}>$29.99</h8>
                                        </Card>
                                    </Col>

                                </Row>
                                <Button className='view-products-btn'>View All Products</Button>
                            </div>

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
        </div >
    );
}

export default IntroCard;


