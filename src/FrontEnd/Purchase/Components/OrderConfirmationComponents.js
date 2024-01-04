//IMPORT React elements
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap'

//IMPORT Context
import { useOrderConfirmationContext } from '../Contexts/OrderConfirmationContext';
// import { useCartContext } from '../../Contexts/CartContext'
// import { useCheckoutContext } from '../../CheckoutContext'

//IMPORT Icons
import { AiFillPrinter } from 'react-icons/ai'
import { MdAttachEmail } from 'react-icons/md'

// const confirmationContext = useOrderConfirmationContext();
// const { orderNumber, items, email, shippingMethod } = confirmationContext;

// TODO: Implement context below:
// const cartContext = useOrerConfirmationContext();
// const { cart, items } = cartContext;

// const checkoutContext = useCheckoutContext();
// const { email, shippingMethod } = checkoutContext;

//  Displays the heading
export const OrderConfirmationHeading = ({ orderNumber }) => {
    return (
        <div>
            <Card className="order-confirmation-title">
                <h1>Thanks, your order was confirmed.</h1>
            </Card>
            <Card className="order-confirmation-number">
                <h3>Order # {orderNumber}</h3>
            </Card>
        </div>
    )
}

// Summary of user order
export const OrderSummary = ({ items, email }) => {

    const DisplayOrders = () => {
        return (
            <ListGroup variant="flush">
                {items.map(item => (<ListGroup.Item><SummaryItem cartItem={item} /></ListGroup.Item>))}
            </ListGroup>
        )
    }

    return (
        <div className='w-100 d-flex justify-content-center'>
            <Card style={{ border: "none", borderRadius: "10px", padding: "15px", width: "90%" }}>
                <h4>Order Summary</h4>
                <p style={{ fontSize: "0.9em", color: "lightslategray" }}>An overview of your transaction was sent to {email}.</p>
                <DisplayOrders />
            </Card>
        </div >
    )
}

// Single item in user order
const SummaryItem = ({ cartItem }) => {
    const [sizeFullName, setSizeFullName] = useState('');

    useEffect(() => {
        const receivedSize = cartItem.size;
        if (receivedSize == 'XS') setSizeFullName('Extra Small');
        else if (receivedSize == 'S') setSizeFullName('Small');
        else if (receivedSize == 'M') setSizeFullName('Medium');
        else if (receivedSize == 'L') setSizeFullName('Large');
        else setSizeFullName('Extra Large');
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: "2em" }}>
                <Card.Img variant="right" src={cartItem.product._imageURL} alt="My Image" style={{ width: "7em", height: "9em", overflow: "visible" }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", padding: "10px" }}>
                <h6>{cartItem.product._name} - {cartItem.color} (x{cartItem.quantity})</h6>
                <p style={{ color: "slategray", fontSize: "0.8em" }}>{sizeFullName}</p>
                <br />
                <p style={{ fontSize: "0.8em" }}>${cartItem.subtotal}</p>
            </div>
        </div>
    )
}

// Displays the subtotal w/ shipping
export const SubtotalShipping = ({ cart, shippingMethod }) => {
    let shippingCost = shippingMethod === 'Standard' ? 'FREE' : '$15.00';
    return (
        <div style={{ width: "80%" }}>
            <Row style={{ padding: "10px" }}>
                <Col xs={10}>
                    <h6>Subtotal</h6>
                </Col>
                <Col xs={2}>
                    ${cart.total}
                </Col>
            </Row>
            <Row style={{ padding: "10px" }}>
                <Col xs={10}>
                    <h6>Shipping</h6>
                </Col>
                <Col xs={2} style={{ fontSize: "14px" }}>
                    {shippingCost}
                </Col>
            </Row>
        </div>
    )
}

//Displays the total
export const Total = ({ cart, shippingMethod }) => {
    let shippingCost = shippingMethod === 'Standard' ? 0 : 15;
    const total = parseFloat(parseFloat(cart.total) + shippingCost).toFixed(2);

    return (
        <div style={{ width: "80%", height: "6%" }} >
            <Row style={{ padding: "10px" }}>
                <Col xs={4}>
                    <h5>Total</h5>
                </Col>
                <Col xs={{ offset: 6, span: 2 }}>
                    <p>USD <span style={{ fontSize: "25px" }}><b>${total}</b></span></p>
                </Col>
            </Row>
        </div >
    )
}

export const ExportOrderDetails = () => {
    return (
        <div className="order-confirmation-buttons">
            <Button variant="dark" className="order-confirmation-button">
                <MdAttachEmail />
            </Button>
            <Button variant="light" className="order-confirmation-button">
                <AiFillPrinter />
            </Button>
        </div>
    )
}
