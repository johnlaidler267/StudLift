//IMPORT React elements
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap'

// IMPORT Custom Hooks
import setSize from './Hooks/setSize'

//IMPORT Context
import { useOrderConfirmationContext } from '../../Contexts/OrderConfirmationContext';
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
            <Card className='w-90 border-0 px-5'>
                <h4>Order Summary</h4>
                <p className='subtext'>An overview of your transaction was sent to {email}.</p>
                <DisplayOrders />
            </Card>
        </div >
    )
}

// Single item in user order
const SummaryItem = ({ cartItem }) => {
    const name = cartItem.product._name;
    const color = cartItem.color
    const quantity = cartItem.quantity;
    const subtotal = cartItem.subtotal;
    const imgURL = cartItem.product._imageURL
    const { sizeFullName } = setSize(cartItem);

    const ProductImg = () => {
        return (
            <Card.Img variant="right" src={imgURL} style={{ width: "7em", height: "9em", overflow: "visible" }} />
        )
    }

    const ProductDetails = () => {
        return (
            <>
                <h6>{name} - {color} (x{quantity})</h6>
                <p className='subtext'>{sizeFullName}</p>
                <br />
                <p style={{ fontSize: "0.8em" }}>${subtotal}</p>
            </>
        )
    }

    return (
        <div className='d-flex flex-row' >
            <div className='mr-2'>
                <ProductImg />
            </div>
            <div className='d-flex flex-column justify-content-center' style={{ padding: "10px" }}>
                <ProductDetails />
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

    const DisplayTotal = () => {
        let shippingCost = shippingMethod === 'Standard' ? 0 : 15;
        const total = parseFloat(parseFloat(cart.total) + shippingCost).toFixed(2);

        return (
            <p>USD <span style={{ fontSize: "25px" }}><b>${total}</b></span></p>
        )
    }

    return (
        <div style={{ width: "80%", height: "6%" }} >
            <Row style={{ padding: "10px" }}>
                <Col xs={4}>
                    <h5>Total</h5>
                </Col>
                <Col xs={{ offset: 6, span: 2 }}>
                    <DisplayTotal />
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
