//Cutom CSS
import '../Navbar.css'

//React components
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import QuantityPicker from "../../Purchase/Components/QuantityPicker/QuantityPicker";

//Photos
import ItemPicture from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/searchItem.webp';
import logo from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/logo1.png';

import { fetchUserCart } from '../../Mens+Womens/ViewItem/ViewItemDB'

import './PopupBag.css'
import { CarCrashTwoTone } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';

export const PopupBag = ({ onClose, firebaseID }) => {
    const navigate = useNavigate();
    const [bagItems, setBagItems] = useState([])
    const [cart, setCart] = useState({})

    useEffect(() => {
        fetchUserCart(firebaseID).then((cart) => {
            setBagItems(cart.getCartItems());
            setCart(cart);
            console.log(`The current cart is ${JSON.stringify(cart)}`)
        });
    });

    return (
        <div className="Modal Show">

            <Card style={{ border: "none", padding: "10px", margin: "2px" }}>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col xs={10}>
                        <h5><b>YOUR BAG</b></h5>
                    </Col>
                    <Col xs={2} >
                        <Button onClick={onClose} variant='outline-secondary' className="Close">X</Button>
                    </Col>

                    <Divider></Divider>

                    <Card id='bag-item-card'>
                        {bagItems.map(item => (<div><BagItem cartItem={item} cart={cart} /><Divider></Divider></div>))}
                        <Row style={{ padding: "5px" }}>
                            <Col xs={9}>
                                <h5>Total:</h5>
                            </Col>
                            <Col xs={3}>
                                <p><b>{cart.total}</b></p>
                            </Col>
                        </Row>
                    </Card>

                    <Divider></Divider>

                </Row>

                <Card style={{ width: "100%", padding: "5px", border: "none" }}>
                    <Col style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Button onClick={() => navigate('/information')} variant="primary" style={{ width: "100%", margin: "2px" }}>CHECKOUT</Button>
                        <Button onClick={() => navigate('/cart')} variant="secondary" style={{ width: "100%", margin: "2px" }}>YOUR BAG</Button>
                    </Col>
                </Card>

            </Card>
        </div >
    )
}

const BagItem = ({ cartItem, cart }) => {
    return (
        <div>
            <Container style={{ padding: "2px", marginBottom: "10px" }}>
                <Card style={{ width: "100%", padding: "5px", border: "none" }}>
                    <Row>
                        <Col xs={4}>
                            <Card.Img src={cartItem.product._imageURL} alt="My Image" style={{ width: "110%", height: "100%", overflow: "visible" }} />
                        </Col>
                        <Col xs={8}>
                            <Row>
                                <Col xs={8}>
                                    <h7 style={{ fontSize: "12px" }}><b>| NEW</b></h7>
                                </Col>
                                <Col xs={4}>
                                    <h9 style={{ fontSize: "14px" }}><b>{cartItem.product._price}</b></h9>
                                </Col>
                            </Row>
                            <Row>
                                <h7>{cartItem.product._name}</h7>
                                <h9 style={{ fontSize: "12px" }}>{cartItem.color}</h9>
                                <br />
                                <QuantityPicker current={cartItem.getQuantity()} min={1} max={100} cart={cart} cartItem={cartItem.getItemID()} />
                                <br />
                                <a onClick={() => cart.deleteProduct(cartItem.itemID)} style={{ color: "gray", textDecoration: "none", fontSize: "12px" }}>Remove</a>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Container >
        </div >
    )
}