//IMPORT Custom styling
import '../Styling/Checkout.css'
import '../Styling/Information.css'
import '../Components/QuantityPicker/QuantityPicker.css';

//IMPORT React elements
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';

//IMPORT Context
import InformationProvider from '../Contexts/InformationContext'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

//IMPORT Helper functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';
import { fetchUserCart } from '../../ProductPages/Pages/ViewItem/ViewItemDB'

//IMPORT Custom components
import { CartReviewSidebar } from '../Components/CartReviewSidebar/CartReviewSidebar.js'
import { CheckoutForm, Navigate, ExpressCheckout } from '../Components/InformationComponents'
import { Terms, Timeline } from '../Components/CommonComponents'

//IMPORT Icons
import { FaCcStripe, FaGooglePay } from 'react-icons/fa'
import { IoIosArrowDroprightCircle, IoIosArrowDropleft } from 'react-icons/io'
import UserInfoContext from '../../../Contexts/UserInfoContext';

export default function Information() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
    // -> store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);

    //Stores the form fields (email, name, shippinh)
    const [form, setForm] = useState({});

    //Stores the cart items
    const [bagItems, setBagItems] = useState([])

    // Stores the actual cart
    const [cart, setCart] = useState({})

    // TODO: Import Context
    const { checkoutInfo, setCheckoutInfo } = useContext(CheckoutContext)
    const { cartContext, setCartContext } = useContext(CartContext);
    const { userInfoContext, setUserInfoContext } = useContext(UserInfoContext);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
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
                const shippingCountryLS = localStorage.getItem("shippingCountry");
                const shippingCityLS = localStorage.getItem("shippingCity");
                const shippingStateLS = localStorage.getItem("shippingState");
                const shippingZipLS = localStorage.getItem("shippingZip");

                // Set values or default values if not found
                const email = emailLS || data.Email;
                const first = shippingFirstLS || data.First;
                const last = shippingLastLS || data.Last;
                const addLine1 = shippingAddLine1LS || data.Shipping.AddLine1;
                const addLine2 = shippingAddLine2LS || data.Shipping.AddLine2;
                const country = shippingCountryLS || data.Shipping.Country || "";
                const city = shippingCityLS || data.Shipping.City;
                const state = shippingStateLS || data.Shipping.State;
                const zip = shippingZipLS || data.Shipping.Zip;

                const shippingAddress = {
                    AddLine1: addLine1,
                    AddLine2: addLine2,
                    Country: country,
                    City: city,
                    State: state,
                    Zip: zip,
                }

                // -> Initialize state variables for form fields
                setForm({
                    Email: email,
                    First: first,
                    Last: last,
                    AddLine1: addLine1,
                    AddLine2: addLine2,
                    Country: country,
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
                localStorage.setItem("shippingCountry", country);
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
        });
    }, []);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const handleProceedtoShipping = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Function to perform form validation
        const validateForm = () => {
            const {
                Email,
                Country,
                First,
                Last,
                AddLine1,
                AddLine2,
                City,
                State,
                Zip,
            } = form;

            // Check if any required fields are empty
            if (
                !Email ||
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

        if (!validateForm()) {
            alert('Please fill in all required fields before proceeding.');
            return;
        }

        localStorage.setItem('Email', form.Email);
        localStorage.setItem('shippingFirst', form.First);
        localStorage.setItem('shippingLast', form.Last);
        localStorage.setItem('shippingAddLine1', form.AddLine1);
        localStorage.setItem('shippingAddLine2', form.AddLine2);
        localStorage.setItem('shippingCountry', form.Country);
        localStorage.setItem('shippingCity', form.City);
        localStorage.setItem('shippingState', form.State);
        localStorage.setItem('shippingZip', form.Zip);

        // TODO: Store values in context
        setCheckoutInfo({ ...checkoutInfo, Email: email, First: first, Last: last, ShippingAddress: shippingAddress, });

        navigate('/shipping')
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

    // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

    context = {
        user,
        form,
        setForm,
        navigate,
        handleProceedtoShipping,
        bagItems,
        cart
    }

    return (
        <InformationProvider value={context}>
            <Container className="info-container">
                <Card className="info-card">
                    <Row className="info-row">
                        <Col xs={7}>
                            <Timeline currentURL={window.location.pathname} />
                            <ExpressCheckout />
                            <Divider>OR</Divider>
                            <CheckoutForm user={user} form={form} setForm={setForm} />
                            <Navigate navigate={navigate} />
                            <Terms />
                        </Col>
                        <CartReviewSidebar bagItems={bagItems} cart={cart} />
                    </Row>
                    <Divider />
                </Card>
            </Container>
        </InformationProvider>
    );
}