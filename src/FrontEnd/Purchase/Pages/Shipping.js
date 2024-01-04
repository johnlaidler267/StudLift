//IMPORT Custom styling
import '../Components/QuantityPicker/QuantityPicker.css';
import '../Styling/Shipping.css'

//IMPORT React elements
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import Divider from '@mui/material/Divider';

//IMPORT Context
import ShippingProvider from '../Contexts/ShippingContext'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

//IMPORT Helper functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';
import { fetchUserCart } from '../../ProductPages/Pages/ViewItem/ViewItemDB'

//IMPORT Custom components
import { CartReviewSidebar } from '../Components/CartReviewSidebar/CartReviewSidebar.js'
import { BuyerDetails, SelectShippingMethod, Navigate } from '../Components/ShippingComponents';
import { Terms, Timeline } from '../Components/CommonComponents'


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

    const context = {
        email,
        shipping,
        bagItems,
        cart,
        handleShippingSelection,
        shippingMethod
    }

    return (
        <ShippingProvider value={context}>
            <Container id='shipping-container'>
                <Card id='shipping-card'>
                    <Row id='shipping-row'>
                        <Col xs={7}>
                            <Timeline currentURL={window.current.pathName} />
                            <br />
                            <BuyerDetails navigate={navigate} email={email} shipping={shipping} />
                            <br />
                            <SelectShippingMethod standardChecked={standardChecked} handleShippingSelection={handleShippingSelection} />
                            <br />
                            <Navigate navigate={navigate} />
                            <br />
                            <Terms />
                        </Col>
                        <CartReviewSidebar bagItems={bagItems} cart={cart} shippingMethod={shippingMethod} />
                    </Row>
                    <Divider />
                    <Row></Row>
                </Card >
            </Container >
        </ShippingProvider>
    );
}