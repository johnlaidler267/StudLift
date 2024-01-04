//IMPORT Custom styling
import '../../Styling/Navbar.css'
import '../../Styling/PopupBag.css'

//IMPORT React elements
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import QuantityPicker from "../../../Purchase/Components/QuantityPicker/QuantityPicker";

//IMPORT Helper functions
import { fetchUserCart } from '../../../ProductPages/Pages/ViewItem/ViewItemDB'

//IMPORT ICONS
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { style } from '@mui/system';

// Displays the pop-up cart displayed on each webpage
export const PopupBag = ({ onClose, firebaseID }) => {
    const navigate = useNavigate();
    const [bagItems, setBagItems] = useState([])
    const [cart, setCart] = useState({})

    useEffect(() => {
        fetchUserCart(firebaseID).then((cart) => {
            setBagItems(cart.getCartItems());
            setCart(cart);
        });
    });

    //Displays the header for the cart
    const BagHeader = () => {
        const BagLabel = () => {
            return (
                <h3 style={{ fontSize: "1.7em" }}><HiOutlineShoppingBag className='mb-2' /><b>YOUR BAG</b></h3>
            )
        }
        const CloseBtn = () => {
            return (
                <Button onClick={onClose} variant='outline-secondary' className="Close"><AiFillCloseCircle /></Button>
            )
        }
        return (
            <>
                <Col xs={10}>
                    <BagLabel />
                </Col>
                <Col xs={2} >
                    <CloseBtn />
                </Col>
            </>
        )
    }

    //Displays cart items + total
    const BagContents = () => {

        //Displays the items in the cart
        const BagItems = () => {
            return (
                <>{bagItems.map(item => (<div><BagItem cartItem={item} cart={cart} /><Divider></Divider></div>))}</>
            )
        }

        //Displays the cart total
        const Total = () => {
            const total = cart.total;
            return (
                <Row style={{ padding: "5px" }}>
                    <Col xs={9}>
                        <h5>Total:</h5>
                    </Col>
                    <Col xs={3}>
                        <h5><b>{total}</b></h5>
                    </Col>
                </Row>
            )
        }

        return (
            <Card id='bag-item-card'>
                <BagItems />
                <Total />
            </Card>
        );
    }

    // Displays nav btns to checkout OR view bag
    const NavBtns = () => {
        const CheckoutBtn = () => {
            return (
                <>
                    {cart.total != '0.00' && <Button onClick={() => navigate('/information')} variant="primary" style={{ width: "100%", margin: "2px" }}>CHECKOUT</Button>}
                </>
            )
        }
        const ViewBagBtn = () => {
            return (
                <>
                    {cart.total != '0.00' && <Button onClick={() => navigate('/cart')} variant="secondary" style={{ width: "100%", margin: "2px" }}>YOUR BAG</Button>}
                </>
            )
        }
        return (
            <Card className='w-100 b-0' style={{ padding: "5px" }}>
                <Col className='w-100 d-flex justify-content-center'>
                    <CheckoutBtn />
                    <ViewBagBtn />
                </Col>
            </Card>
        )
    }

    return (
        <div className="Modal Show">
            <Card style={{ border: "none", padding: "15px", margin: "2px" }}>
                <Row className='d-flex justify-content-center'>
                    <BagHeader />
                    <Divider></Divider>
                    <BagContents />
                    <Divider></Divider>
                </Row>
                <NavBtns />
            </Card>
        </div >
    )
}

// Displays a single product from the user's cart
const BagItem = ({ cartItem, cart }) => {

    const ProductImg = () => {
        const url = cartItem.product._imageURL
        return (
            <Card.Img src={url} style={{ width: "110%", height: "100%", overflow: "visible" }} />
        )
    }

    // Displays product info + modification
    const ProductDetails = () => {
        const price = cartItem.product._price
        const name = cartItem.product._name
        const color = cartItem.color
        const quantity = cartItem.getQuantity()
        const id = cartItem.getItemID()

        const NewTag = () => {
            return (<h7 style={{ fontSize: "12px" }}><b>| NEW</b></h7>)
        }
        const Price = () => {
            return (<h9 style={{ fontSize: "14px" }}><b>{price}</b></h9>)
        }
        const Name = () => {
            return (<h7>{name}</h7>)
        }
        const Color = () => {
            return (<h9 style={{ fontSize: "12px" }}>{color}</h9>)
        }
        const ChangeQuantity = () => {
            return (<QuantityPicker current={quantity} min={1} max={100} cart={cart} cartItem={id} />)
        }
        const Delete = () => {
            return (<a onClick={() => cart.deleteProduct(id)} style={{ color: "gray", textDecoration: "none", fontSize: "12px" }}>Remove</a>)
        }
        return (
            <>
                <Row>
                    <Col xs={8}>
                        <NewTag />
                    </Col>
                    <Col xs={4}>
                        <Price />
                    </Col>
                </Row>
                <Row>
                    <Name />
                    <Color />
                    <ChangeQuantity />
                    <Delete />
                </Row>
            </>
        )
    }

    return (
        <div>
            <Container style={{ padding: "2px", marginBottom: "10px" }}>
                <Card className='b-0 w-100' style={{ padding: "5px" }}>
                    <Row>
                        <Col xs={4}>
                            <ProductImg />
                        </Col>
                        <Col xs={8}>
                            <ProductDetails />
                        </Col>
                    </Row>
                </Card>
            </Container >
        </div >
    )
}