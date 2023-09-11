import '../Components/QuantityPicker/QuantityPicker.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { AiFillPrinter } from 'react-icons/ai'
import { MdAttachEmail } from 'react-icons/md'
import one from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/one.webp'

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

import { getUserDetails } from '../../../BackEnd/commonFunctions';
import { fetchUserCart } from '../../Mens+Womens/ViewItem/ViewItemDB'
import { getCardNameList } from '../../EditAccount/Revise_Info/RevisePaymentFunctions'


import { Summary, SubtotalShipping, Total } from './OrderConfirmationComponents'

export default function OrderConfirmation() {
    // =================================================================
    // -> Initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================
    function generateOrderNumber() {
        // Generate a random 7-digit number
        const randomPart = Math.floor(1000000 + Math.random() * 9000000).toString();

        // Concatenate the fixed prefix "114-" with the random number and a second random 7-digit number
        const orderNumber = `114-${randomPart}-${randomPart}`;

        return orderNumber;
    }
    //================================================================
    // Function to clear local storage
    const clearLocalStorage = () => {
        localStorage.clear();
    };
    // =================================================================
    // -> store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);

    //Stores the cart items
    const [cartItems, setCartItems] = useState([])

    // Stores the actual cart
    const [cart, setCart] = useState({})

    const [email, setEmail] = useState("email")

    const [orderNumber, setOrderNumber] = useState(generateOrderNumber());
    //================================================================
    //-> Fetches the cart, email, on page load

    useEffect(() => {

        //Fetch the user cart & cart items from DB
        fetchUserCart(user.uid).then((cart) => {
            setCartItems(cart.cartItems);
            setCart(cart);
        });

        //Fetch the email from LS
        setEmail(localStorage.getItem('Email'));

        //Push a new order number to the user's order history
        getUserDetails(user.uid).then((user) => {
            user.addOrder(new Order(orderNumber, paymentMethod, shippingAddress, billingAddress, email));
        };

        // Clean up function to clear localStorage when the component unmounts
        return () => {
            clearLocalStorage();
        };
    }, [user.uid]);
    // =================================================================
    return (
        <Container style={{
            maxWidth: "none", width: "101%", height: "100%"
        }}>
            <Card style={{ width: "100%", height: "100%", border: "none", display: "flex", alignItems: "center" }}>
                <Card style={{ margin: "30px", border: "none" }}><h1>Thanks, your order was confirmed. </h1></Card>
                <Card style={{ color: "slategray", border: "none" }}><h3>Order # {orderNumber}</h3></Card>
                <br />
                <Summary cart={cart} items={cartItems} email={email} />
                <br />
                <SubtotalShipping cart={cart} />
                <Total cart={cart} />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", width: "80%" }}>
                    <Button variant="dark" style={{ margin: "10px" }}><MdAttachEmail /></Button>
                    <Button variant="light" style={{ margin: "10px" }}><AiFillPrinter /></Button>
                </div>
            </Card >
        </Container >
    );
}