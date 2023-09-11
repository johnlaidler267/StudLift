import './Checkout.css'
import '../Components/QuantityPicker/QuantityPicker.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { TbCircle1, TbCircle2, TbCircle3, TbCircleCheck, TbCirclePlus } from 'react-icons/tb'
import { BsArrowReturnLeft, BsArrowRightSquareFill } from 'react-icons/bs'
import { FaCcPaypal, FaGooglePay } from 'react-icons/fa'
import { IoIosArrowDroprightCircle, IoIosArrowDropleft } from 'react-icons/io'

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

import { getUserDetails } from '../../../BackEnd/commonFunctions';

import { CartReviewSidebar } from '../Components/CartReviewSidebar/CartReviewSidebar.js'
import CheckoutTimeline from '../Components/CheckoutTimeline/CheckoutTimeline.js'

import { fetchUserCart } from '../../Mens+Womens/ViewItem/ViewItemDB'


export default function Information() {
    // =================================================================
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================
    // -> store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);

    //Stores the form fields (email, name, shippinh)
    const [form, setForm] = useState({});

    //Stores the cart items
    const [bagItems, setBagItems] = useState([])

    // Stores the actual cart
    const [cart, setCart] = useState({})

    // =================================================================
    useEffect(() => {
        try {
            getUserDetails(user.uid).then((data) => {

                //-> Initialize ls state
                // Attempt to retrieve values from local storage
                const emailLS = localStorage.getItem("Email");
                const shippingFirstLS = localStorage.getItem("shippingFirst");
                const shippingLastLS = localStorage.getItem("shippingLast");
                const shippingAddLine1LS = localStorage.getItem("shippingAddLine1");
                const shippingAddLine2LS = localStorage.getItem("shippingAddLine2");
                const shippingCityLS = localStorage.getItem("shippingCity");
                const shippingStateLS = localStorage.getItem("shippingState");
                const shippingZipLS = localStorage.getItem("shippingZip");

                // Set values or default values if not found
                const email = emailLS || data.Email;
                const first = shippingFirstLS || data.First;
                const last = shippingLastLS || data.Last;
                const addLine1 = shippingAddLine1LS || data.Shipping.AddLine1;
                const addLine2 = shippingAddLine2LS || data.Shipping.AddLine2;
                const city = shippingCityLS || data.Shipping.City;
                const state = shippingStateLS || data.Shipping.State;
                const zip = shippingZipLS || data.Shipping.Zip;

                // -> Initialize state variables for form fields
                setForm({
                    Email: email,
                    First: first,
                    Last: last,
                    AddLine1: addLine1,
                    AddLine2: addLine2,
                    City: city,
                    State: state,
                    Zip: zip,
                });

                // Store values in local storage
                localStorage.setItem("Email", email);
                localStorage.setItem("shippingFirst", first);
                localStorage.setItem("shippingLast", last);
                localStorage.setItem("shippingAddLine1", addLine1);
                localStorage.setItem("shippingAddLine2", addLine2);
                localStorage.setItem("shippingCity", city);
                localStorage.setItem("shippingState", state);
                localStorage.setItem("shippingZip", zip);
            });
        }
        catch {
            //TODO: Handle error
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
    /**
     * Handle form field changes and update the form state accordingly.
     * @param {string} value - The new value of the field.
     * @param {string} field - The field name to update.
     */
    const handleFormChange = (value, field) => {
        setForm(form => ({
            ...form,
            [field]: value
        }));

        // Append 'shipping' to the field for LS purposes
        const LSField = 'shipping' + field;

        // Store values in local storage
        localStorage.setItem(LSField, value);
    }
    //================================================================

    const CheckoutForm = () => {
        return (
            <div style={{ padding: "12px" }}>
                <Form style={{ padding: "10px" }}>
                    <Row>
                        <Col xs={7}>
                            <h5>Contact information</h5>
                        </Col>
                        <Col xs={5}>
                            {!user && <p style={{ fontSize: "12px" }}>Already have an account? <b>Sign in.</b></p>}
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control placeholder="Email" value={form.Email} onChange={(event) => handleFormChange(event.target.value, 'Email')} />
                    </Form.Group>
                    <br />
                    <h5>Shipping address</h5>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Control placeholder="First Name" value={form.First} onChange={(event) => handleFormChange(event.target.value, 'First')} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Control placeholder="Last Name" value={form.Last} onChange={(event) => handleFormChange(event.target.value, 'Last')} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="AddLine1">
                        <Form.Control placeholder="Address Line 1" value={form.AddLine1} onChange={(event) => handleFormChange(event.target.value, 'AddLine1')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="AddLine2">
                        <Form.Control placeholder="Apartment, studio, or floor" value={form.AddLine2} onChange={(event) => handleFormChange(event.target.value, 'AddLine2')} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="City">
                            <Form.Control placeholder="City" value={form.City} onChange={(event) => handleFormChange(event.target.value, 'City')} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="State">
                            <Form.Select defaultValue="State" value={form.State} onChange={(event) => handleFormChange(event.target.value, 'State')}>
                                <option>State</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Control placeholder="Zip" value={form.Zip} onChange={(event) => handleFormChange(event.target.value, 'Zip')} />
                        </Form.Group>
                    </Row>

                    <div className='button-row'>
                        <Button className='direction-btn' onClick={() => navigate('/cart')} type="submit" style={{ color: "black", backgroundColor: "white" }} >
                            <IoIosArrowDropleft className='arrow' /> Return to cart
                        </Button>
                        <Button className='direction-btn' onClick={() => navigate('/shipping')} variant="dark" type="submit" style={{ borderRadius: "20px" }}>
                            <b>CONTINUE TO SHIPPING <IoIosArrowDroprightCircle className='arrow' /></b>
                        </Button>
                    </div>
                </Form >
            </div >
        )
    }


    const ExpressCheckout = () => {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "90%" }}>
                    <Divider>Express Checkout</Divider>
                    <Card style={{ padding: "5px", border: "none" }}>
                        <Row style={{ width: "100%" }}>
                            <Button style={{ width: "60%", backgroundColor: "orange", border: "none", margin: "5px" }} as={Col}><FaCcPaypal style={{ width: "30px", height: "30px" }} /></Button>
                            <Button style={{ width: "60%", backgroundColor: "black", border: "none", margin: "5px" }} as={Col}><FaGooglePay style={{ width: "30px", height: "30px" }} /></Button>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <Container style={{
            maxWidth: "none", width: "101%", height: "900px"
        }}>
            <Card style={{ width: "100%", height: "100%", border: "none", display: "flex", alignItems: "center" }}>
                <Row style={{ padding: "5px", width: "100%", height: "100%" }}>
                    <Col xs={7}>
                        <br />
                        <Container style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <CheckoutTimeline url={window.location.pathname} />

                        </Container>
                        <br />
                        <ExpressCheckout />
                        <br />
                        <Divider>OR</Divider>
                        <CheckoutForm />
                        <br />
                        <Container style={{ display: "flex", justifyContent: "center" }}>
                            <p style={{ fontSize: "12px" }}>By placing your order you agree to StudentLifter's <u>Terms and Conditions</u>, <u>Privacy Notice</u> and <u>Cookie Policy.</u></p>
                        </Container>
                    </Col>
                    <CartReviewSidebar bagItems={bagItems} cart={cart} />
                </Row>
                <Divider />
                <Row></Row>
            </Card>
        </Container >
    );
}