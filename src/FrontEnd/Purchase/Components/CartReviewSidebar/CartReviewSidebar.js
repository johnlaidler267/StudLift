//IMPORT Custom styling
import '../../Styling/Checkout.css'
import './CartReviewSidebar.css'

//IMPORT React elements
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap'

//IMPORT MUI elements
import Divider from '@mui/material/Divider';

export const CartReviewSidebar = ({ bagItems, cart, shippingMethod }) => {
    return (
        <Col style={{ backgroundColor: "#EEEEEE", padding: "20px" }} xs={5}>
            <ProductList bagItems={bagItems} cart={cart} />
            <br />
            <DiscountCode />
            <br />
            <Divider />
            <SubtotalShipping cart={cart} shippingMethod={shippingMethod} />
            <Divider />
            <Total cart={cart} shippingMethod={shippingMethod} />
        </Col>
    );
}

const DiscountCode = () => {
    return (
        <Form id='discount-code-form'>
            <div id='discount-code-div'>
                <Row id='discount-code-row'>
                    <Col xs={10} >
                        <Form.Group id='discount-code-form-group'>
                            <Form.Control id='discount-code-form-cntrl' placeholder="Gift card or discount code" />
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Button variant="secondary" id='discount-code-btn'><b>APPLY</b></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}

const SubtotalShipping = ({ cart, shippingMethod }) => {
    return (
        <div>
            <Row className='total-row'>
                <Col xs={10}>
                    <h6>Subtotal</h6>
                </Col>
                <Col xs={2}>
                    <b>${cart.total}</b>
                </Col>
            </Row>
            <Row className='total-row'>
                <Col xs={9}>
                    <h6>Shipping</h6>
                </Col>
                <Col xs={3} >
                    {!shippingMethod ? <p style={{ fontSize: "12px" }}>Calculated at next step...</p> : <p style={{ fontSize: "12px" }}>{shippingMethod}</p>}
                </Col>
            </Row>
        </div>
    )
}

const Total = ({ cart, shippingMethod }) => {
    let total = parseFloat(cart.total);
    if (shippingMethod)
        total = shippingMethod == "$15.00" ? parseFloat(total + 15).toFixed(2) : total;

    return (
        <div>
            <Row className='total-row'>
                <Col xs={8}>
                    <h5>TOTAL</h5>
                </Col>
                <Col xs={4}>
                    <p>USD <span style={{ fontSize: "25px" }}><b>${total}</b></span></p>
                </Col>
            </Row>
        </div >
    )

}

const ProductRow = ({ cartItem, cart }) => {
    return (
        <div>
            <Row id='product-row'>
                <Col xs={10}>
                    <Card id='product-card'>
                        <Card.Body className='flex'>
                            <div style={{ width: '30%', position: 'relative', marginRight: '15px' }}>
                                <Card.Img src={cartItem.product._imageURL} id='product-img' />
                                <span class='badge badge-warning' id='lblCartCount'> {cartItem.quantity}</span>
                            </div>
                            <div style={{ marginTop: '40px', marginRight: '40px' }}>
                                <Card.Title id='product-title'>{cartItem.product._name} </Card.Title>
                                <Card.Text className='product-desc'>{cartItem.color}</Card.Text>
                                <Card.Text className='product-desc'>Size: {cartItem.size}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card >
                </Col>
                <Col xs={2} className='center-column'>
                    <b>${cart.getCartItem(cartItem.getItemID()).getSubtotal()}</b>
                </Col>
            </Row>
            <Divider />
        </div>

    )
}

export const ProductList = ({ bagItems, cart }) => {
    return (
        <>
            <Row>
                <div style={{ width: '100%' }}>
                    {bagItems.map(item => (<ProductRow cartItem={item} cart={cart} />))}
                </div>
            </Row>
        </>
    )
}