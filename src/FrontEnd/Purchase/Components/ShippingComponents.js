//IMPORT Custom styling
import '../Styling/Payment.css'

//IMPORT React elements
import React, { useState } from 'react';
import { Card, Row, Col, Form, Container, Button } from 'react-bootstrap'
import { Divider } from '@mui/material'

//IMPORT Context
import { useShippingContext } from '../Contexts/ShippingContext';
// import { useCheckoutContext } from '../../CheckoutContext'

// Extract variables from context
// const shippingContext = useShippingContext();
// const { standardChecked, handleShippingSelection } = paymentContext;

// TODO: Implement context below:
// const checkoutContext = useCheckoutContext();
// const { email, shipping } = checkoutContext;

export const Navigate = ({ navigate }) => {
    return (
        <Container id='navigation-container'>
            <Row>
                <Col xs={8}>
                    <Button onClick={() => navigate('/information')} type="submit" id='proceed-btn'>
                        ⇐ Return to information
                    </Button>
                </Col>
                <Col xs={4}>
                    <Button onClick={() => navigate('/payment')} variant="dark" type="submit" id='back-btn'>
                        <b>CONTINUE TO PAYMENT ⇒</b>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export const SelectShippingMethod = ({ standardChecked, handleShippingSelection }) => {
    return (<div id='select-shipping-bg-div'>
        <div id='select-shipping-div'>
            <h4 >Shipping Method</h4>
            <br />
            <Card id='select-shipping-card'>
                <Form>
                    <Row>
                        <Col xs={10}>
                            <Form.Check defaultChecked checked={standardChecked} name='shippingMethod' type='radio' className='shipping-radio' label='Standard Delivery (4 - 7 Working Days) *Once your order has shipped.' value='$0.00' onClick={(e) => handleShippingSelection(e.target.value)} />
                        </Col>
                        <Col xs={2}>
                            <p className='info-field'><b>Free</b></p>
                        </Col>
                    </Row>
                    <Divider />
                    <Row style={{ paddingTop: "1em" }}>
                        <Col xs={10}>
                            <Form.Check checked={!standardChecked} name='shippingMethod' type='radio' className='shipping-radio' label='Express Delivery (1 - 3 Working Days) *Once your order has shipped' value='$15.00' onClick={(e) => handleShippingSelection(e.target.value)} />
                        </Col>
                        <Col xs={2}>
                            <p className='info-field'><b>$15.00</b></p>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    </div>)
}

export const BuyerDetails = ({ navigate, email, shipping }) => {
    return (
        <div id='info-div'>
            <Card id='info-card'>
                <Row>
                    <Col xs={2}>
                        <p className='info-label'>Contact</p>
                    </Col>
                    <Col xs={8}>
                        <p className='info-field'>{email}</p>
                    </Col>
                    <Col xs={2}>
                        <a onClick={() => navigate('/information')} className='info-field'>Change</a>
                    </Col>
                </Row>
                <Divider />
                <Row style={{ paddingTop: "1em" }}>
                    <Col xs={2}>
                        <p className='info-label'>Ship to</p>
                    </Col>
                    <Col xs={8}>
                        <p className='info-field'>{shipping}</p>
                    </Col>
                    <Col xs={2}>
                        <a onClick={() => navigate('/information')} className='info-field'>Change</a>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}