//IMPORT Custom styling
import '../Styling/Orders.css'

//IMPORT React elements
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap';

//IMPORT Photos
import Cards from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/cards.png'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

//IMPORT Custom components
import { ProductList } from '../Components/CartComponents'

//IMPORT Helper functions
import { fetchUserCart } from '../../ProductPages/Pages/ViewItem/ViewItemDB'

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
        });
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const Checkout = () => {
        return (
            <div className='w-80 d-flex justify-content-end' style={{padding: '10px' }}>
                <img src={Cards} style={{ width: '15%', marginRight: '70%' }}></img>
                <Button onClick={() => navigate('/information')} style={{ width: '15em' }}>CHECKOUT</Button >
            </div>
        )
    }

    const CartHeader = () => {
        return (
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
        )
    }

    const CartItems = () => {
        return (
            <Card.Body>
                <ProductList bagItems={bagItems} cart={cart} />
            </Card.Body>
        )
    }

    const CartTotal = () => {
        return (
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
        )
    }

    const CartLabel = () => {
        return (<h3 style={{ marginTop: '5%', marginBottom: '1%' }}>SHOPPING BAG</h3>);
    }

    return (
        <div className='w-100'>
            <Card className='b-0 center' style={{ padding: '10px' }}>
                <CartLabel/>
                <Card className='w-80'>
                    <CartHeader/>
                    <CartItems/>
                    <CartTotal/>
                </Card>
                <Checkout/>
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