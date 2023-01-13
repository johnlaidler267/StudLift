import './Checkout.css'
import '../QuantityPicker/QuantityPicker.css';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { TbCircle1, TbCircle2, TbCircle3, TbCircleCheck, TbCirclePlus } from 'react-icons/tb'
import { BsArrowReturnLeft, BsArrowRightSquareFill } from 'react-icons/bs'
import { FaCcPaypal, FaGooglePay } from 'react-icons/fa'
import { IoIosArrowDroprightCircle, IoIosArrowDropleft } from 'react-icons/io'


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


export default function Information() {
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
                            <TbCircle1 style={{ width: "100%", height: "90px" }} />
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
                            <TbCircle3 style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
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

    const CheckoutForm = () => {
        return (
            <div style={{ padding: "12px" }}>
                <Row>
                    <Col xs={7}>
                        <h5>Contact information</h5>
                    </Col>
                    <Col xs={5}>
                        <p style={{ fontSize: "12px" }}>Already have an account? <b>Sign in.</b></p>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control placeholder="Email" />
                </Form.Group>
                <br />
                <h5>Shipping address</h5>
                <Form style={{ padding: "10px" }}>
                    <Row className="mb-3">
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

                    <div className='button-row'>
                        <Button className='direction-btn' href=' /cart' type="submit" style={{ color: "black", backgroundColor: "white" }} >
                            <IoIosArrowDropleft className='arrow' /> Return to cart
                        </Button>
                        <Button className='direction-btn' href='/shipping' variant="dark" type="submit" style={{ borderRadius: "20px" }}>
                            <b>CONTINUE TO SHIPPING <IoIosArrowDroprightCircle className='arrow' /></b>
                        </Button>
                    </div>
                </Form >
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

    const ExpressCheckout = () => {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "90%" }}>
                    <Divider>Express Checkout</Divider>
                    <Card style={{ padding: "5px", border: "none" }}>
                        <Row style={{ width: "100%" }}>
                            <Button style={{ width: "60%", backgroundColor: "orange", border: "none", margin: "5px" }} as={Col}><FaCcPaypal style={{ width: "30px", height: "30px" }} /></Button>
                            <Button style={{ width: "60%", backgroundColor: "black", border: "none", margin: "5px" }} as={Col}><FaGooglePay style={{ width: "30px", height: "30px" }} /></Button>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <Container style={{
            maxWidth: "none", width: "101%", height: "900px"
        }}>
            <Card style={{ width: "100%", height: "100%", border: "none", display: "flex", alignItems: "center" }}>
                <Row style={{ padding: "5px", width: "100%", height: "100%" }}>
                    <Col xs={7}>
                        <br />
                        <Container style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <CheckoutTimeline />

                        </Container>
                        <br />
                        <ExpressCheckout />
                        <br />
                        <Divider>OR</Divider>
                        <CheckoutForm />
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
            </Card>
        </Container >
    );
}