import '../Components/QuantityPicker/QuantityPicker.css';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { TbCircle1, TbCircle2, TbCircle3, TbCircleCheck, TbCirclePlus } from 'react-icons/tb'
import { BsArrowRightSquareFill } from 'react-icons/bs'


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


export default function Shipping() {
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
                            <TbCircle2 style={{ width: "100%", height: "90px" }} />
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
                            </Card>
                        </div>
                        <br />

                        <div style={{ width: "100%", display: 'flex', justifyContent: "center" }}>
                            <div style={{ width: "90%", display: "flex", flexDirection: "column", justifyContent: "start" }}>
                                <h4 >Shipping Method</h4>
                                <br />
                                <Card style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "15px", width: "100%" }}>
                                    <Row>
                                        <Col xs={10}>
                                            <Form>
                                                <Form.Check type='radio' style={{ fontSize: "0.9em", color: "lightslategray" }} label='Standard Delivery (4 - 7 Working Days) *Once your order has shipped.' />
                                            </Form>
                                        </Col>
                                        <Col xs={2}>
                                            <p style={{ fontSize: "0.9em" }}><b>Free</b></p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row style={{ paddingTop: "1em" }}>
                                        <Col xs={10}>
                                            <Form>
                                                <Form.Check type='radio' style={{ fontSize: "0.9em", color: "lightslategray" }} label='Express Delivery (1 - 3 Working Days) *Once your order has shipped' />
                                            </Form>
                                        </Col>
                                        <Col xs={2}>
                                            <p style={{ fontSize: "0.9em" }}><b>$15.00</b></p>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                        </div>
                        <br />
                        <Container style={{ width: "90%" }}>
                            <Row>
                                <Col xs={8}>
                                    <Button href='/information' type="submit" style={{ color: "black", backgroundColor: "white", border: "none", fontSize: "12px", padding: "10px" }}>
                                        ⇐ Return to information
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Button href='payment' variant="dark" type="submit" style={{ borderRadius: "20px", fontSize: "12px", padding: "10px" }}>
                                        <b>CONTINUE TO PAYMENT ⇒</b>
                                    </Button>
                                </Col>
                            </Row>
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