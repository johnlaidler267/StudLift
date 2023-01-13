//Custom styling
import './Orders.css'

//React components
import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import QuantityPicker from "../Purchase/QuantityPicker/QuantityPicker";

//Icons

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Photos/beanie.webp'
import Cards from '/Users/johnnylaidler/studentlifter/src/Photos/cards.png'

function Cart() {

    const ProductCard = () => {
        return (
            <Card style={{ border: 'none' }}>
                <Card.Body className='flex'>
                    <Card.Img src={Beanie} style={{ width: '15%' }}></Card.Img>
                    <div style={{ margin: '40px' }}>
                        <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }}>Sharkhead Beanie - Navy </Card.Title>
                        <Card.Text style={{ fontSize: '0.9em', whiteSpace: 'nowrap', color: 'gray' }}>Size: M</Card.Text>
                        <Card.Text style={{ fontSize: '0.9em', whiteSpace: 'nowrap', color: 'gray' }}>$54.00 USD</Card.Text>
                    </div>
                </Card.Body>
            </Card >
        )
    }

    const ProductList = () => {
        return (
            <div style={{ width: '100%' }}>
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                    <Col xs={8}>
                        <ProductCard />
                    </Col>
                    <Col xs={2} className='center-column'>
                        <QuantityPicker min={0} max={4} />
                        <a href='' style={{ color: 'gray', textDecoration: 'none', fontSize: '0.7em' }}>Remove</a>
                    </Col>
                    <Col xs={2} className='center-column'>
                        $54.00
                    </Col>
                </Row>
                <Divider />
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                    <Col xs={8}>
                        <ProductCard />
                    </Col>
                    <Col xs={2} className='center-column'>
                        <QuantityPicker min={0} max={4} />
                        <a href='' className='remove'>Remove</a>
                    </Col>
                    <Col xs={2} className='center-column'>
                        $54.00
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <Card className='center' style={{ alignItems: 'center', padding: '10px', border: 'none' }}>
                <h3 style={{ marginTop: '5%', marginBottom: '1%' }}>SHOPPING BAG</h3>
                <Card style={{ width: '80%' }}>
                    <Card.Header >
                        <Row>
                            <Col xs={8}>
                                <p>ITEM</p>
                            </Col>
                            <Col xs={2} className='center'>
                                <p>QUANTITY</p>
                            </Col>
                            <Col xs={2} className='center'>
                                <p>SUBTOTAL</p>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <ProductList />
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: 'white' }}>
                        <Row>
                            <Col xs={10}>
                                <Button href='mens-all' variant='dark'>Continue Shopping</Button>
                            </Col>
                            <Col xs={2}>
                                <p><b>TOTAL <span style={{ marginLeft: '20px' }}>$94.00 USD</span></b></p>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'end', padding: '10px' }}>
                    <img src={Cards} style={{ width: '15%', marginRight: '70%' }}></img>
                    <Button href='information' style={{ width: '15em' }}>CHECKOUT</Button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Card >


        </div >
    )
}

export default Cart;