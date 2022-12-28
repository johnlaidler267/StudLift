import React from 'react';
import { Card, Container, Row, Col, Accordion } from 'react-bootstrap';

// import react icons
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

function AboutUs(props) {
    return (

        <Container fluid style={{
            width: "95%",
            margin: "0 auto"
        }}>
            <Card style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
                <Card.Header ><h4>Who Are We?</h4></Card.Header>
                <Card.Body>
                    <p>Student Lifter is a brand dedicated to providing high-quality fitness apparel and accessories for students and young professionals. Our products are designed to be both stylish and functional, so you can look and feel your best while working towards your fitness goals. We believe that everyone should have access to affordable, high-quality fitness gear, and that's why we offer a wide range of products at competitive prices. Whether you're just starting out on your fitness journey or you're a seasoned athlete, Student Lifter has something for everyone. We hope you'll join us on our mission to help you reach your full potential.</p>

                    <h5>Frequently Asked Questions</h5>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> What types of products does Student Lifter offer?</Accordion.Header>
                            <Accordion.Body>
                                Student Lifter offers a wide range of fitness apparel and accessories, including workout clothes, shoes, and gym bags. We have options for both men and women, and our products are designed to be both functional and stylish.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do I place an order on your website?</Accordion.Header>
                            <Accordion.Body>
                                To place an order on our website, simply add the items you'd like to purchase to your cart and proceed to checkout. You'll be prompted to enter your shipping and billing information, and you can choose from a variety of payment methods.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is your return policy?</Accordion.Header>
                            <Accordion.Body>
                                We offer a 30-day return policy on all of our products. If you're not satisfied with your purchase for any reason, you can return it for a full refund within 30 days of receiving your order.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do you offer free shipping?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we offer free standard shipping on all orders within the United States.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How can I contact Customer Service?</Accordion.Header>
                            <Accordion.Body>
                                You can contact our Customer Service team by emailing us at [email address], or by filling out the contact form on our website. Our team is available to answer any questions or concerns you may have Monday through Friday, 9am to 5pm EST.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col xs={9}>
                            Copyright 2022 Student Lifter. All rights reserved.
                        </Col>
                        <Col xs={3}>
                            <Row>
                                <Col style={{ height: "20%", width: "20%" }} xs={1}>
                                    <FaCcVisa style={{ height: "100%", width: "100%" }} />
                                </Col>
                                <Col style={{ height: "20%", width: "20%" }} xs={1}>
                                    <FaCcPaypal style={{ height: "100%", width: "100%" }} />
                                </Col>
                                <Col style={{ height: "20%", width: "20%" }} xs={1}>
                                    <FaCcMastercard style={{ height: "100%", width: "100%" }} />
                                </Col>
                                <Col style={{ height: "19%", width: "19%" }} xs={1}>
                                    <SiAmericanexpress style={{ height: "100%", width: "100%" }} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container >
    );
}

export default AboutUs;


