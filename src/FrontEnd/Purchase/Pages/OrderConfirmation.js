//IMPORT Custom styling
import '../Components/QuantityPicker/QuantityPicker.css';
import '../Styling/OrderConfirmation.css'

//IMPORT Reaact elements
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

//IMPORT Contexts
import OrderConfirmationProvider from '../Contexts/OrderConfirmationContext'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

//IMPORT Helper functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';
import { fetchUserCart } from '../../ProductPages/Pages/ViewItem/ViewItemDB'

//IMPORT Custom components
import { OrderSummary, SubtotalShipping, Total, ExportOrderDetails, OrderConfirmationHeading } from '../Components/OCComponents/OrderConfirmationComponents'

//IMPORT Classes
import UserOrder from '../Classes/Order.js'

export default function OrderConfirmation() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> Initialize the navigate function to redirect to other pages
    const navigate = useNavigate();
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> Helper functions

    function generateOrderNumber() {
        // Generate a random 7-digit number
        const randomPart = Math.floor(1000000 + Math.random() * 9000000).toString();

        // Concatenate the fixed prefix "114-" with the random number and a second random 7-digit number
        const orderNumber = `114-${randomPart}-${randomPart}`;

        return orderNumber;
    }

    // Function to clear local storage
    const clearLocalStorage = () => {
        localStorage.clear();
    };

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [cartItems, setCartItems] = useState([]) //Stores the cart items

    const [cart, setCart] = useState({}) // Stores the actual cart

    const [email, setEmail] = useState("email")

    const [orderNumber, setOrderNumber] = useState(generateOrderNumber());

    const [shippingMethod, setShippingMethod] = useState('');
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //-> Fetches the cart, email, on page load

    useEffect(() => {

        //Fetch the user cart & cart items from DB
        fetchUserCart(user.uid).then((cart) => {
            setCartItems(cart.cartItems);
            setCart(cart);

            //Fetch the email from LS
            setEmail(localStorage.getItem('Email'));

            setShippingMethod(localStorage.getItem('shippingMethod'));

            //Push a new order number to the user's order history
            getUserDetails(user.uid).then((data) => {

                const shippingAddress = {
                    First: localStorage.getItem('shippingFirst'),
                    Last: localStorage.getItem('shippingLast'),
                    AddLine1: localStorage.getItem('shippingAddLine1'),
                    AddLine2: localStorage.getItem('shippingAddLine2'),
                    Country: localStorage.getItem('shippingCountry') || 'United States',
                    City: localStorage.getItem('shippingCity'),
                    State: localStorage.getItem('shippingState'),
                    Zip: localStorage.getItem('shippingZip')
                }

                const billingAddress = {
                    First: localStorage.getItem('billingFirst'),
                    Last: localStorage.getItem('billingLast'),
                    AddLine1: localStorage.getItem('billingAddLine1'),
                    AddLine2: localStorage.getItem('billingAddLine2'),
                    Country: localStorage.getItem('billingCountry') || 'United States',
                    City: localStorage.getItem('billingCity'),
                    State: localStorage.getItem('billingState'),
                    Zip: localStorage.getItem('billingZip')
                }

                let shippingCost = localStorage.getItem('shippingMethod') === 'Standard' ? 0 : 15;

                const userOrders = data.Orders; // Grab the current order array
                userOrders.push(new UserOrder(cart.cartItems, orderNumber, email, { ...shippingAddress }, { ...billingAddress }, parseFloat(parseFloat(cart.total) + shippingCost).toFixed(2))); //add a new instance of the current order

                //Call the '/record/updateOrders' route to add the order to the user's order history
                fetch(`http://localhost:3000/record/updateOrders/${user.uid}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userOrders)
                }).then((res) => {
                    if (res.ok) {
                        console.log('Order number added to user order history');
                    }
                    // Clean up function to clear localStorage when the component unmounts
                    clearLocalStorage();
                });

            });
        });
    }, [user.uid]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const context = {
        cart,
        cartItems,
        email,
        shippingMethod
    }

    return (
        <OrderConfirmationProvider value={context}>
            <Container className="order-confirmation">
                <Card className="order-confirmation-card">
                    <OrderConfirmationHeading orderNumber={orderNumber} />
                    <OrderSummary items={cartItems} />
                    <SubtotalShipping cart={cart} />
                    <Total />
                    <ExportOrderDetails cart={cart} shippingMethod={shippingMethod} />
                </Card>
            </Container>
        </OrderConfirmationProvider>
    );
}; 