import '../QuantityPicker/QuantityPicker.css';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Container, Row, Col, Form, Button, Accordion, InputGroup, FloatingLabel } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { TbCircle1, TbCircle2, TbCircle3, TbCircleCheck, TbCirclePlus } from 'react-icons/tb'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { IoIosArrowDroprightCircle, IoIosArrowDropleft } from 'react-icons/io'



function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}



export default function Payment() {
    function CustomToggleSame({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <Card >
                <Form.Check
                    type='radio'
                    id={`disabled-default-radio`}
                    style={{ marginLeft: "20px", padding: "15px", fontWeight: "bold" }}
                    onClick={decoratedOnClick}
                    label='Same as shipping address'
                />
            </Card>
        );
    }

    function CustomToggleDifferent({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <Card style={{ border: "none" }}>
                <Form.Check
                    type='radio'
                    id={`disabled-default-radio`}
                    style={{ marginLeft: "20px", padding: "15px", fontWeight: "bold" }}
                    onClick={decoratedOnClick}
                    label='	Use a different billing address'
                />
            </Card>
        );
    }

    const CheckoutTimeline = () => {
        return (
            <div role="presentation" onClick={handleClick} >
                <Breadcrumbs separator={<BsArrowRightSquareFill />} aria-label="breadcrumb" >

                    <Link underline="hover" color="inherit" href="/" className='breadcrumb-link'>
                        <Container style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100px",
                        }}>
                            <TbCirclePlus style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
                            <Typography style={{
                                width: "90%",
                                fontSize: "10px",
                                textAlign: "center"
                            }}>CART</Typography>
                        </Container>
                    </Link>

                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <Container style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100px",
                        }}>
                            <TbCircle1 style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
                            <Typography style={{
                                width: "100%",
                                fontSize: "10px",
                                textAlign: "center"
                            }}>INFORMATION</Typography>
                        </Container>
                    </Link>

                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <Container style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100px"
                        }}>
                            <TbCircle2 style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
                            <Typography style={{
                                width: "100%",
                                fontSize: "10px",
                                textAlign: "center"
                            }}>SHIPPING</Typography>
                        </Container>
                    </Link>

                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <Container style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100px"
                        }}>
                            <TbCircle3 style={{ width: "100%", height: "90px" }} />
                            <Typography style={{
                                width: "100%",
                                fontSize: "10px",
                                textAlign: "center"
                            }}>PAYMENT</Typography>
                        </Container>
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <Container style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100px"
                        }}>
                            <TbCircleCheck style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
                            <Typography style={{
                                width: "100%",
                                fontSize: "10px",
                                textAlign: "center"
                            }}>COMPLETE</Typography>
                        </Container>
                    </Link>
                </Breadcrumbs>
            </div >
        )
    }

    const DiscountCode = () => {
        return (
            <Form style={{ width: "100%", padding: "5px", display: "flex", justifyContent: "center", border: "none" }}>
                <div style={{ width: "90%" }}>
                    <Row style={{ width: "100%", alignItems: 'center' }}>
                        <Col xs={10} >
                            <Form.Group style={{ display: "flex", justifyContent: "right" }}>
                                <Form.Control style={{ padding: "15px" }} placeholder="Gift card or discount code" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Button variant="secondary" style={{ padding: "12px", borderRadius: "20px" }}><b>APPLY</b></Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        )
    }

    const SubtotalShipping = () => {
        return (
            <div>
                <Row style={{ padding: "10px" }}>
                    <Col xs={10}>
                        <h6>Subtotal</h6>
                    </Col>
                    <Col xs={2}>
                        $94.00
                    </Col>
                </Row>
                <Row style={{ padding: "10px" }}>
                    <Col xs={8}>
                        <h6>Shipping</h6>
                    </Col>
                    <Col xs={4} style={{ fontSize: "12px" }}>
                        Calculated at next step...
                    </Col>
                </Row>
            </div>
        )
    }

    const Total = () => {
        return (
            <div>
                <Row style={{ padding: "10px" }}>
                    <Col xs={2}>
                        <h5>Total</h5>
                    </Col>
                    <Col xs={{ span: 4, offset: 6 }}>
                        <p>USD <span style={{ fontSize: "25px" }}><b>$95.00</b></span></p>
                    </Col>
                </Row>
            </div >
        )

    }

    const CartItem = () => {
        return (
            <div></div>
        )

    }

    const Cart = () => {
        return (
            <div></div>
        )
    }

    return (
        <Container style={{
            maxWidth: "none", width: "101%", height: "100%"
        }}>
            <Card style={{ width: "100%", height: "100%", border: "none", display: "flex", alignItems: "center" }}>
                <Row style={{ padding: "5px", width: "100%", height: "100%" }}>
                    <Col xs={7}>
                        <br />
                        <Container style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <CheckoutTimeline />
                        </Container>
                        <br />
                        <br />

                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "15px", width: "90%" }}>
                                <Row>
                                    <Col xs={2}>
                                        <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Contact</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p style={{ fontSize: "0.9em" }}>fsdhfuh@hefw.com</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a href='' style={{ fontSize: "0.9em" }}>Change</a>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row style={{ paddingTop: "1em" }}>
                                    <Col xs={2}>
                                        <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Ship to</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p style={{ fontSize: "0.9em" }}>
                                            343 South Greenwich Road, Wichita KS 67207, United States</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a href='' style={{ fontSize: "0.9em" }}>Change</a>
                                    </Col>
                                </Row>
                                <Row style={{ paddingTop: "1em" }}>
                                    <Col xs={2}>
                                        <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Method</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p style={{ fontSize: "0.9em" }}>

                                            Standard Delivery (4 - 7 Working Days) *Once your order has shipped · <b>Free</b></p>
                                    </Col>
                                    <Col xs={2}>
                                        <a href='' style={{ fontSize: "0.9em" }}>Change</a>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <br />

                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card style={{ border: "none", borderRadius: "10px", padding: "15px", width: "90%" }}>
                                <h4>Payment</h4>
                                <p style={{ fontSize: "0.9em", color: "lightslategray" }}>All transactions are secure and encrypted.</p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> <Form.Check
                                            type='radio'
                                            id={`disabled-default-radio`}
                                            style={{ marginRight: "10px" }}
                                        /><b>Credit/Debit Card</b>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Form style={{ padding: "10px" }}>
                                                <Row className="mb-3">

                                                    <InputGroup className="mb-3" controlId="cardNumber">
                                                        <Form.Control placeholder="Card number" aria-describedby="basic-addon1" style={{ borderRight: "none" }} />
                                                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "white", borderLeft: "none" }} ><AiFillLock /> </InputGroup.Text>
                                                    </InputGroup>

                                                    <Form.Group className="mb-3" controlId="nameOnCard">
                                                        <Form.Control placeholder="Name on card" />
                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Control placeholder="Expiration date (MM/YY)" />
                                                    </Form.Group>

                                                    <InputGroup as={Col}>
                                                        <Form.Control placeholder="Security Code" aria-describedby="basic-addon2" style={{ borderRight: "none" }} />
                                                        <InputGroup.Text id="basic-addon2" style={{ backgroundColor: "white", borderLeft: "none" }}><AiFillQuestionCircle /> </InputGroup.Text>
                                                    </InputGroup>
                                                </Row>
                                            </Form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> <Form.Check
                                            type='radio'
                                            id={`disabled-default-radio`}
                                            style={{ marginRight: "10px" }}
                                        /><b>PayPal</b>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            To place an order on our website, simply add the items you'd like to purchase to your cart and proceed to checkout. You'll be prompted to enter your shipping and billing information, and you can choose from a variety of payment methods.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card>
                        </div>
                        <br />
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card style={{ border: "none", borderRadius: "10px", padding: "15px", width: "90%" }}>
                                <h4>Billing address</h4>
                                <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Select the address that matches your card or payment method.</p>
                                <Accordion defaultActiveKey="0">
                                    <CustomToggleSame eventKey="0">Click me!</CustomToggleSame>
                                    <Accordion.Item eventKey="1">
                                        <CustomToggleDifferent eventKey="1">Click me!</CustomToggleDifferent>
                                        <Accordion.Body>
                                            <Form style={{ padding: "10px" }}>
                                                <Row className="mb-3">
                                                    <Form.Group controlId="formGridState" className="mb-3">
                                                        <FloatingLabel controlId="Country/Region" label="Country/region" >
                                                            <Form.Select defaultValue="Country">
                                                                <option>United States</option>
                                                                <option>...</option>
                                                            </Form.Select>
                                                        </FloatingLabel>
                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Control placeholder="First Name" />
                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Control placeholder="Last Name" />
                                                    </Form.Group>
                                                </Row>

                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Control placeholder="Address Line 1" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                                </Form.Group>

                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="formGridCity">
                                                        <Form.Control placeholder="City" />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <Form.Select defaultValue="State">
                                                            <option>State</option>
                                                            <option>...</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridZip">
                                                        <Form.Control placeholder="Zip" />
                                                    </Form.Group>
                                                </Row>

                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Control placeholder="Phone" />
                                                </Form.Group>
                                            </Form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card>
                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='button-row' style={{ width: '90%' }}>
                                <Button className='direction-btn' href=' /shipping' type="submit" style={{ color: "black", backgroundColor: "white" }} >
                                    <IoIosArrowDropleft className='arrow' /> Return to shipping
                                </Button>
                                <Button className='direction-btn' href='/confirmation' variant="dark" type="submit" style={{ borderRadius: "20px" }}>
                                    <b>PAY NOW <IoIosArrowDroprightCircle className='arrow' /></b>
                                </Button>
                            </div>
                        </div>
                        <br />
                        <Container style={{ display: "flex", justifyContent: "center" }}>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Save my information for a faster checkout"
                                style={{ marginRight: "10px" }}
                            />
                        </Container>

                        <br />
                        <Container style={{ display: "flex", justifyContent: "center" }}>
                            <p style={{ fontSize: "12px" }}>By placing your order you agree to StudentLifter's <u>Terms and Conditions</u>, <u>Privacy Notice</u> and <u>Cookie Policy.</u></p>
                        </Container>

                    </Col>
                    <Col style={{ backgroundColor: "#EEEEEE", padding: "20px" }} xs={5}>
                        <Cart />
                        <br />
                        <Divider />
                        <br />
                        <DiscountCode />
                        <br />
                        <Divider />
                        <SubtotalShipping />
                        <Divider />
                        <Total />
                    </Col>
                </Row>
                <Divider />
                <Row></Row>
            </Card >
        </Container >
    );
}