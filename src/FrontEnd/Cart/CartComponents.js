//* Stores all sub-components for the Shopping Bag component

//Import React stuff
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import QuantityPicker from "../Purchase/Components/QuantityPicker/QuantityPicker";

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'
import Cards from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/cards.png'

const ProductRow = ({ cartItem, cart }) => {
    console.log(`The cart item is ${JSON.stringify(cartItem)}`)
    console.log(`The cart is ${JSON.stringify(cart)}`)
    return (
        <div>
            <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col xs={8}>
                    <Card style={{ border: 'none' }}>
                        <Card.Body className='flex'>
                            <Card.Img src={cartItem.product._imageURL} style={{ width: '15%' }}></Card.Img>
                            <div style={{ margin: '40px' }}>
                                <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }}>{cartItem.product._name} - {cartItem.color} </Card.Title>
                                <Card.Text style={{ fontSize: '0.9em', whiteSpace: 'nowrap', color: 'gray' }}>Size: {cartItem.size}</Card.Text>
                                <Card.Text style={{ fontSize: '0.9em', whiteSpace: 'nowrap', color: 'gray' }}>${cartItem.product._price} USD</Card.Text>
                            </div>
                        </Card.Body>
                    </Card >
                </Col>
                <Col xs={2} className='center-column'>
                    <QuantityPicker current={cart.getCartItem(cartItem.getItemID()).quantity} min={1} max={100} cart={cart} cartItem={cartItem.getItemID()} />
                    <a onClick={() => cart.deleteProduct(cartItem.getItemID())} style={{ color: 'gray', textDecoration: 'none', fontSize: '0.7em' }}>Remove</a>
                </Col>
                <Col xs={2} className='center-column'>
                    ${cart.getCartItem(cartItem.getItemID()).getSubtotal()}
                </Col>
            </Row>
            <Divider />
        </div>

    )
}

export const ProductList = ({ bagItems, cart }) => {

    return (
        <div style={{ width: '100%' }}>
            {bagItems.map(item => (<ProductRow cartItem={item} cart={cart} />))}
        </div>
    )
}