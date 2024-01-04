//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/Checkout.css'
import './CartReviewSidebar.css'

//IMPORT React elements
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap'

//IMPORT MUI elements
import Divider from '@mui/material/Divider';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const CartReviewSidebar = ({ bagItems, cart, shippingMethod }) => {

    const DiscountCode = () => {

        const CodeInput = () => {
            return (
                <Form.Group id='discount-code-form-group'>
                    <Form.Control id='discount-code-form-cntrl' placeholder="Gift card or discount code" />
                </Form.Group>
            )
        }

        const ApplyCodeBtn = () => {
            return (
                <Button variant="secondary" id='discount-code-btn'><b>APPLY</b></Button>
            )
        }

        return (
            <Form id='discount-code-form'>
                <div id='discount-code-div'>
                    <Row id='discount-code-row'>
                        <Col xs={10} >
                            <CodeInput/>
                        </Col>
                        <Col xs={2}>
                            <ApplyCodeBtn/>
                        </Col>
                    </Row>
                </div>
            </Form>
        )
    }

    const SubtotalShipping = ({ cart, shippingMethod }) => {
        return (
            <div>
                <div className='total-row'>
                    <h6>Subtotal</h6>
                    <b>${cart.total}</b>
                </div>
                <div className='total-row'>
                    <h6>Shipping</h6>
                    {!shippingMethod ? <p style={{ fontSize: "12px" }}>Calculated at next step...</p> : <p style={{ fontSize: "12px" }}>{shippingMethod}</p>}
                </div>
            </div>
        )
    }

    const Total = ({ cart, shippingMethod }) => {
        const total = parseFloat(cart.total);

        if (shippingMethod)
            total = shippingMethod == "$15.00" ? parseFloat(total + 15).toFixed(2) : total;

        return (
            <div>
                <div className='total-row'>
                    <h5>TOTAL</h5>
                    <p>USD <span style={{ fontSize: "25px" }}><b>${total}</b></span></p>
                </div>
            </div >
        )
    }

    const ProductList = ({ bagItems, cart }) => {

        const ProductRow = ({ cartItem, cart }) => {
            const imgURL = cartItem.product._imageURL;
            const quantity = cartItem.quantity;
            const name = cartItem.product._name
            const color = cartItem.color;
            const size = cartItem.size;

            const Img = () => {
                return (
                    <Card.Img src={imgURL} id='product-img' />
                )
            }

            const Quantity = () => {
                return (
                    <span class='badge badge-warning' id='lblCartCount'> {quantity}</span>
                )
            }

            const ProductAttributes = () => {

                const Name = () => {
                    return (
                        <Card.Title id='product-title'>{name} </Card.Title>
                    )
                }

                const Color = () => {
                    return (
                        <Card.Text className='product-desc'>{color}</Card.Text>
                    )
                }

                const Size = () => {
                    return (
                        <Card.Text className='product-desc'>Size: {size}</Card.Text>
                    )
                }

                return (
                    <div style={{ marginTop: '40px', marginRight: '40px' }}>
                        <Name />
                        <Color />
                        <Size />
                    </div>
                )
            }

            const Subtotal = () => {
                return (
                    <b>${cart.getCartItem(cartItem.getItemID()).getSubtotal()}</b>
                )
            }

            return (
                <Row id='product-row'>
                    <Col xs={10}>
                        <Card id='product-card'>
                            <Card.Body className='flex'>
                                <div style={{ width: '30%', position: 'relative', marginRight: '15px' }}>
                                    <Img />
                                    <Quantity />
                                </div>
                                <ProductAttributes />
                            </Card.Body>
                        </Card >
                    </Col>
                    <Col xs={2} className='center-column'>
                        <Subtotal />
                    </Col>
                    <Divider />
                </Row>

            )
        }

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

    return (
        <Col style={{ backgroundColor: "#EEEEEE", padding: "20px" }}>
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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~