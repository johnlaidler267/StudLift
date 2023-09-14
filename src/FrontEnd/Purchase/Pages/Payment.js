//IMPORT Custom styling
import '../Components/QuantityPicker/QuantityPicker.css';

//IMPORT React elements
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

//IMPORT MUI elements
import Divider from '@mui/material/Divider';

//IMPORT Icons
import { IoIosArrowDroprightCircle, IoIosArrowDropleft } from 'react-icons/io';

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

//IMPORT Helper functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';
import { fetchUserCart } from '../../ProductPages/Pages/ViewItem/ViewItemDB';
import { getCardNameList } from '../../EditAccount/HelperFunctions/RevisePaymentFunctions';

//IMPORT Custom components
import { CartReviewSidebar } from '../Components/CartReviewSidebar/CartReviewSidebar.js';
import CheckoutTimeline from '../Components/CheckoutTimeline/CheckoutTimeline.js';
import { UserLICreditCardForm, UserNLICreditCardForm, BillingForm } from '../Components/PaymentComponents';

export default function Payment() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> initialize the navigate function to redirect to other pages
    const navigate = useNavigate();
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> Initialize the shippingState variables

    const [user, loading] = useAuthState(auth); // store the user logged in in the user variable
    const [userDetails, setUserDetails] = useState({}); //stores user account details
    const [cardNameList, setCardNameList] = useState([]); //Stores the list of card names
    //................................................................
    const [email, setEmail] = useState("");
    const [shippingMethodDisplay, setShippingMethodDisplay] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingForm, setBillingForm] = useState("");
    //................................................................
    const [shippingMethod, setShippingMethod] = useState("");
    //................................................................
    const [bagItems, setBagItems] = useState([]) //Stores the cart items
    const [cart, setCart] = useState({}) // Stores the actual cart
    //................................................................
    const [sameAsShipping, setSameAsShipping] = useState(true);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    useEffect(() => {
        try {
            getUserDetails(user.uid).then((data) => {
                //-> Set the account userDetails 
                setUserDetails(data);
                //--------------------------------------------------------------------------------
                //-> Retrieve list of cards (for payment selection)

                const nameList = getCardNameList(data.Cards, data.DefaultCardIdx); //Get a list of card names E.g. "DiscoverIt ending in •••• 1234"
                setCardNameList(nameList); // Set the card names
                //--------------------------------------------------------------------------------
                //->  Attempt to retrieve values from local storage

                //Email from LS
                const emailLS = localStorage.getItem("Email");

                //Shipping details from LS
                const shippingAddLine1LS = localStorage.getItem("shippingAddLine1");
                const shippingAddLine2LS = localStorage.getItem("shippingAddLine2");
                const shippingCityLS = localStorage.getItem("shippingCity");
                const shippingStateLS = localStorage.getItem("shippingState");
                const shippingZipLS = localStorage.getItem("shippingZip");
                const shippingMethodLS = localStorage.getItem("shippingMethod");

                //Billing details from LS
                const billingFirstLS = localStorage.getItem("billingFirst") || data.First || "";
                const billingLastLS = localStorage.getItem("billingLast") || data.Last || "";
                const billingAddLine1LS = localStorage.getItem("billingAddLine1") || data.Billing.AddLine1 || "";
                const billingAddLine2LS = localStorage.getItem("billingAddLine2") || data.Billing.AddLine2 || "";
                const billingCityLS = localStorage.getItem("billingCity") || data.Billing.City || "";
                const billingStateLS = localStorage.getItem("billingState") || data.Billing.State || "";
                const billingCountryLS = localStorage.getItem("billingCountry") || data.Billing.Country || "";
                const billingZipLS = localStorage.getItem("billingZip") || data.Billing.Zip || "";

                setEmail(emailLS);
                setShippingAddress(shippingAddLine1LS + ", " + shippingAddLine2LS + ", " + shippingCityLS + ", " + shippingStateLS + ", " + shippingZipLS);
                setBillingForm({ First: billingFirstLS, Last: billingLastLS, AddLine1: billingAddLine1LS, AddLine2: billingAddLine2LS, City: billingCityLS, State: billingStateLS, Country: billingCountryLS, Zip: billingZipLS })

                //If its saved in local storage, then set the shipping method display
                if (shippingMethodLS !== null) {
                    shippingMethodLS === "Standard" ? setShippingMethodDisplay(`Standard Delivery (4 - 7 Working Days) *Once your order has shipped.`) : setShippingMethodDisplay(`Express Delivery (1 - 3 Working Days) *Once your order has shipped`);
                    shippingMethodLS === "Standard" ? setShippingMethod("$0.00") : setShippingMethod("$15.00");
                }
                //Else, set the shipping method to standard (by default)
                else {
                    setShippingMethodDisplay(`Standard Delivery (4 - 7 Working Days) *Once your order has shipped.`);
                }
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

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const handlePayNow = () => {

        // Function to perform form validation
        const validateForm = () => {
            const {
                Country,
                First,
                Last,
                AddLine1,
                AddLine2,
                City,
                State,
                Zip,
            } = billingForm;

            // Check if any required fields are empty
            if (
                !Country ||
                !First ||
                !Last ||
                !AddLine1 ||
                !AddLine2 ||
                !City ||
                !State ||
                !Zip
            ) {
                return false;
            }

            return true;
        };

        //If sameAsShipping is true, then set the billing address to the shipping address from LS
        if (sameAsShipping) {
            localStorage.setItem("billingFirst", localStorage.getItem("shippingFirst"));
            localStorage.setItem("billingLast", localStorage.getItem("shippingLast"));
            localStorage.setItem("billingAddLine1", localStorage.getItem("shippingAddLine1"));
            localStorage.setItem("billingAddLine2", localStorage.getItem("shippingAddLine2"));
            localStorage.setItem("billingCity", localStorage.getItem("shippingCity"));
            localStorage.setItem("billingState", localStorage.getItem("shippingState"));
            localStorage.setItem("billingCountry", localStorage.getItem("shippingCountry"));
            localStorage.setItem("billingZip", localStorage.getItem("shippingZip"));
        }
        //Else, set the billing address to the result of the form
        else {
            localStorage.setItem("billingFirst", billingForm.First);
            localStorage.setItem("billingLast", billingForm.Last);
            localStorage.setItem("billingAddLine1", billingForm.AddLine1);
            localStorage.setItem("billingAddLine2", billingForm.AddLine2);
            localStorage.setItem("billingCity", billingForm.City);
            localStorage.setItem("billingState", billingForm.State);
            localStorage.setItem("billingCountry", billingForm.Country);
            localStorage.setItem("billingZip", billingForm.Zip);

            if (!validateForm()) {
                alert('Please fill in all required fields before proceeding.');
                return;
            }
        }

        navigate('/confirmation');
    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <Container style={{
            maxWidth: "none", width: "101%", height: "100%"
        }}>
            <Card style={{ width: "100%", height: "100%", border: "none", display: "flex", alignItems: "center" }}>
                <Row style={{ padding: "5px", width: "100%", height: "100%" }}>
                    <Col xs={7}>
                        <br />
                        <Container style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <CheckoutTimeline url={window.location.pathname} />
                        </Container>
                        <br />
                        <br />

                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Card style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "15px", width: "90%" }}>
                                <Row>
                                    <Col xs={2}>
                                        <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Contact</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p style={{ fontSize: "0.9em" }}>{email}</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a onClick={() => navigate('/information')} style={{ fontSize: "0.9em" }}>Change</a>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row style={{ paddingTop: "1em" }}>
                                    <Col xs={2}>
                                        <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Ship to</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p style={{ fontSize: "0.9em" }}>{shippingAddress}</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a onClick={() => navigate('/information')} style={{ fontSize: "0.9em" }}>Change</a>
                                    </Col>
                                </Row>
                                <Row style={{ paddingTop: "1em" }}>
                                    <Col xs={2}>
                                        <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Method</p>
                                    </Col>
                                    <Col xs={8}>
                                        <p style={{ fontSize: "0.9em" }}>{shippingMethodDisplay}</p>
                                    </Col>
                                    <Col xs={2}>
                                        <a onClick={() => navigate('/shipping')} style={{ fontSize: "0.9em" }}>Change</a>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <br />
                        {user ? <UserLICreditCardForm cards={cardNameList} /> : <UserNLICreditCardForm />}
                        <br />
                        <BillingForm form={billingForm} setForm={setBillingForm} setSameAsShipping={setSameAsShipping} />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='button-row' style={{ width: '90%' }}>
                                <Button className='direction-btn' onClick={() => navigate('/shipping')} type="submit" style={{ color: "black", backgroundColor: "white" }} >
                                    <IoIosArrowDropleft className='arrow' /> Return to shipping
                                </Button>
                                <Button className='direction-btn' onClick={() => handlePayNow()} variant="dark" type="submit" style={{ borderRadius: "20px" }}>
                                    <b>PAY NOW <IoIosArrowDroprightCircle className='arrow' /></b>
                                </Button>
                            </div>
                        </div>
                        <br />
                        <Container style={{ display: "flex", justifyContent: "center" }}>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Save my information for a faster checkout"
                                style={{ marginRight: "10px" }}
                            />
                        </Container>

                        <br />
                        <Container style={{ display: "flex", justifyContent: "center" }}>
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