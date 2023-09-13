//Custom styling
import './Orders.css'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//React components
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap';

//Photos
import Cards from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/cards.png'

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../BackEnd/firebase/firebase';

//Import the list of product cards
import { ProductList } from './CartComponents'

//Import the fnction that fetches the user's cart
import { fetchUserCart } from '../Mens+Womens/ViewItem/ViewItemDB'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Cart() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const navigate = useNavigate();
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [user, loading] = useAuthState(auth); //Sets the current user
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [bagItems, setBagItems] = useState([]) //Stores the cart items
    const [cart, setCart] = useState({}) //Stores the actual cart
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Fetches the cart on page load
    useEffect(() => {
        fetchUserCart(user.uid).then((cart) => {
            setBagItems(cart.cartItems);
            setCart(cart);
            console.log(`The current cart is ${JSON.stringify(cart)}`)
        });
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
                        <ProductList bagItems={bagItems} cart={cart} />
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: 'white' }}>
                        <Row>
                            <Col xs={10}>
                                <Button href='mens-all' variant='dark'>Continue Shopping</Button>
                            </Col>
                            <Col xs={2}>
                                <p><b>TOTAL <span style={{ marginLeft: '20px' }}>${cart.total} USD</span></b></p>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'end', padding: '10px' }}>
                    <img src={Cards} style={{ width: '15%', marginRight: '70%' }}></img>
                    <Button onClick={() => navigate('/information')} style={{ width: '15em' }}>CHECKOUT</Button >
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Card >
        </div >
    )
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

export default Cart;