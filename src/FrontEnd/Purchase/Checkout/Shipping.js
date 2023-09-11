import '../Components/QuantityPicker/QuantityPicker.css';
import './Shipping.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { TbCircle1, TbCircle2, TbCircle3, TbCircleCheck, TbCirclePlus } from 'react-icons/tb'
import { BsArrowRightSquareFill } from 'react-icons/bs'

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

import { getUserDetails } from '../../../BackEnd/commonFunctions';

import { CartReviewSidebar } from '../Components/CartReviewSidebar/CartReviewSidebar.js'
import CheckoutTimeline from '../Components/CheckoutTimeline/CheckoutTimeline.js'

import { fetchUserCart } from '../../Mens+Womens/ViewItem/ViewItemDB'


export default function Shipping() {
    // =================================================================
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================
    // -> store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);

    //stores user account details
    const [userDetails, setUserDetails] = useState({});

    const [email, setEmail] = useState("");

    //The selected shipping method
    const [shippingMethod, setShippingMethod] = useState("");

    //Whether the standard shipping radio is checked by default
    const [standardChecked, setStandardChecked] = useState(false);

    // The string containing the shipping address
    const [shipping, setShipping] = useState("");

    //Stores the cart items
    const [bagItems, setBagItems] = useState([])

    // Stores the actual cart
    const [cart, setCart] = useState({})

    // =================================================================
    useEffect(() => {
        try {
            getUserDetails(user.uid).then((data) => {
                //-> Set the account userDetails 
                setUserDetails(data);

                //--------------------------------------------------------------------------------

                //load the selected shipping method from local storage
                const lsShipping = localStorage.getItem("shippingMethod");

                //If its saved in local storage, then set the shipping method and the radio button
                if (lsShipping !== null) {
                    lsShipping === "Standard" ? setShippingMethod("$0.00") : setShippingMethod("$15.00");
                    setStandardChecked(lsShipping === "Standard");
                }
                //Else, set the shipping method to standard (by default)
                else {
                    setShippingMethod("$0.00");
                    setStandardChecked(true);
                }

                //--------------------------------------------------------------------------------
                // Attempt to retrieve values from local storage
                const emailFromLocalStorage = localStorage.getItem("Email");
                const shippingAddLine1LS = localStorage.getItem("shippingAddLine1");
                const shippingAddLine2LS = localStorage.getItem("shippingAddLine2");
                const shippingCityLS = localStorage.getItem("shippingCity");
                const shippingStateLS = localStorage.getItem("shippingState");
                const shippingZipLS = localStorage.getItem("shippingZip");

                // Set values or default values if not found
                const email = emailFromLocalStorage;
                const addLine1 = shippingAddLine1LS;
                const addLine2 = shippingAddLine2LS;
                const city = shippingCityLS;
                const state = shippingStateLS;
                const zip = shippingZipLS;

                setEmail(email);
                setShipping(addLine1 + ", " + addLine2 + ", " + city + ", " + state + ", " + zip);
                //--------------------------------------------------------------------------------

            });
        }
        catch {
            setUserDetails(null);
        }
    }, []);

    //Fetches the cart on page load
    useEffect(() => {
        fetchUserCart(user.uid).then((cart) => {
            setBagItems(cart.cartItems);
            setCart(cart);
            console.log(`The current cart is ${JSON.stringify(cart)}`)
        });
    }, []);

    // =================================================================
    const handleShippingSelection = (value) => {
        setShippingMethod(value);

        if (value == '$0.00') {
            localStorage.setItem("shippingMethod", "Standard");
            setStandardChecked(true);
        }
        else {
            localStorage.setItem("shippingMethod", "Express");
            setStandardChecked(false);
        }
    }
    //================================================================

    return (
        <Container id='shipping-container'>
            <Card id='shipping-card'>
                <Row id='shipping-row'>
                    <Col xs={7}>
                        <br />

                        <Container id='timeline-container'>
                            <CheckoutTimeline url={window.location.pathname} />
                        </Container>

                        <br />
                        <br />

                        <div id='info-div'>
                            <Card id='info-card'>
                                <Row>
                                    <Col xs={2}>
                                        <p className='info-label'>Contact</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p className='info-field'>{email}</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a onClick={() => navigate('/information')} className='info-field'>Change</a>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row style={{ paddingTop: "1em" }}>
                                    <Col xs={2}>
                                        <p className='info-label'>Ship to</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p className='info-field'>{shipping}</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a onClick={() => navigate('/information')} className='info-field'>Change</a>
                                    </Col>
                                </Row>
                            </Card>
                        </div>

                        <br />

                        <div id='select-shipping-bg-div'>
                            <div id='select-shipping-div'>
                                <h4 >Shipping Method</h4>
                                <br />
                                <Card id='select-shipping-card'>
                                    <Form>
                                        <Row>
                                            <Col xs={10}>
                                                <Form.Check defaultChecked checked={standardChecked} name='shippingMethod' type='radio' className='shipping-radio' label='Standard Delivery (4 - 7 Working Days) *Once your order has shipped.' value='$0.00' onClick={(e) => handleShippingSelection(e.target.value)} />
                                            </Col>
                                            <Col xs={2}>
                                                <p className='info-field'><b>Free</b></p>
                                            </Col>
                                        </Row>
                                        <Divider />
                                        <Row style={{ paddingTop: "1em" }}>
                                            <Col xs={10}>
                                                <Form.Check checked={!standardChecked} name='shippingMethod' type='radio' className='shipping-radio' label='Express Delivery (1 - 3 Working Days) *Once your order has shipped' value='$15.00' onClick={(e) => handleShippingSelection(e.target.value)} />
                                            </Col>
                                            <Col xs={2}>
                                                <p className='info-field'><b>$15.00</b></p>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card>
                            </div>
                        </div>

                        <br />
                        <Container id='navigation-container'>
                            <Row>
                                <Col xs={8}>
                                    <Button onClick={() => navigate('/information')} type="submit" id='proceed-btn'>
                                        ⇐ Return to information
                                    </Button>
                                </Col>
                                <Col xs={4}>
                                    <Button onClick={() => navigate('/payment')} variant="dark" type="submit" id='back-btn'>
                                        <b>CONTINUE TO PAYMENT ⇒</b>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <Container id='terms-and-conditions-container'>
                            <p style={{ fontSize: "12px" }}>By placing your order you agree to StudentLifter's <u>Terms and Conditions</u>, <u>Privacy Notice</u> and <u>Cookie Policy.</u></p>
                        </Container>

                    </Col>
                    <CartReviewSidebar bagItems={bagItems} cart={cart} shippingMethod={shippingMethod} />
                </Row>
                <Divider />
                <Row></Row>
            </Card >
        </Container >
    );
}