//IMPORT Custom styling
import '../Styling/Payment.css'

//IMPORT React elements
import React from 'react';
import { Row, Col, Form } from 'react-bootstrap'

//IMPORT Context
import { useInformationContext } from '../Contexts/InformationContext';

import GooglePayButton from '@google-pay/button-react';
import { loadStripe } from "@stripe/stripe-js";

// Receive variables from context
const infoContext = useInformationContext();
const { user, form, setForm, handleProceedtoShipping } = infoContext;

// const [user, loading] = useAuthState(auth);

export const CheckoutForm = () => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
    const handleFormChange = (value, field) => {
        setForm(form => ({
            ...form,
            [field]: value
        }));
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <div style={{ padding: "12px" }}>
            <Row>
                <Col xs={7}>
                    <h5>Contact information</h5>
                </Col>
                <Col xs={5}>
                    {!user && <p style={{ fontSize: "12px" }}>Already have an account? <b>Sign in.</b></p>}
                </Col>
            </Row>
            <Form style={{ padding: "10px" }}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="email" placeholder="Email" value={form.Email} onChange={(event) => handleFormChange(event.target.value, 'Email')} />
                </Form.Group>
            </Form>
            <br />
            <h5>Shipping address</h5>
            <Form style={{ padding: "10px" }}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Country" >
                        <Form.Select required value={form.Country} onChange={(event) => handleFormChange(event.target.value, 'Country')}>
                            <option>Country</option>
                            <option>United States</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control required placeholder="First Name" value={form.First} onChange={(event) => handleFormChange(event.target.value, 'First')} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control required placeholder="Last Name" value={form.Last} onChange={(event) => handleFormChange(event.target.value, 'Last')} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="AddLine1">
                    <Form.Control required placeholder="Address Line 1" value={form.AddLine1} onChange={(event) => handleFormChange(event.target.value, 'AddLine1')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="AddLine2">
                    <Form.Control required placeholder="Apartment, studio, or floor" value={form.AddLine2} onChange={(event) => handleFormChange(event.target.value, 'AddLine2')} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="City">
                        <Form.Control required placeholder="City" value={form.City} onChange={(event) => handleFormChange(event.target.value, 'City')} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="State" >
                        <Form.Select required defaultValue="State" value={form.State} onChange={(event) => handleFormChange(event.target.value, 'State')}>
                            <option>State</option>
                            <option>MA</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Zip" >
                        <Form.Control required placeholder="Zip" value={form.Zip} onChange={(event) => handleFormChange(event.target.value, 'Zip')} />
                    </Form.Group>
                </Row>
            </Form>
        </div >
    )
}

export const Navigate = ({ navigate, handleProceedtoShipping }) => {

    return (
        <div className="button-row">
            <Button className="direction-btn" onClick={() => navigate("/cart")} type="submit">
                <IoIosArrowDropleft className="arrow" /> Return to cart
            </Button>
            <Button className="direction-btn" onClick={(event) => handleProceedtoShipping(event)} variant="dark" type="submit">
                <b>
                    CONTINUE TO SHIPPING <IoIosArrowDroprightCircle className="arrow" />
                </b>
            </Button>
        </div>
    )
}

export const ExpressCheckout = () => {
    //--> Handles Google Pay Express Checkout 

    // function onGooglePayLoaded() {
    //     window.googlePayClient = new google.payments.api.PaymentsClient({
    //         environment: "TEST"
    //     });
    // }

    // function googlePay() {
    //     const paymentDataRequest = {
    //         // Fill in necessary payment configurations
    //     };

    //     googlePayClient
    //         .loadPaymentData(paymentDataRequest)
    //         .then(function (paymentData) {
    //             console.log(paymentData);
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }
    // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // //--> Handles Stripe Express Checkout

    // const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); // TODO replace w. actual key
    // const options = {
    //     mode: 'payment',
    //     amount: 1099,
    //     currency: 'usd',
    // };
    // const elements = stripe.elements(options);
    // const expressCheckoutElement = elements.create('expressCheckout');
    // expressCheckoutElement.mount('#express-checkout-element');

    // const result = await stripe.confirmPayment({
    //     //`Elements` instance that was used to create the Payment Element
    //     elements,
    //     confirmParams: {
    //         return_url: "https://example.com/order/123/complete", //TODO replace w. return URL
    //     },
    // });

    // if (result.error) {
    //     console.log(result.error.message);
    // } else {
    //     // Your customer will be redirected to your `return_url`.
    // }

    const StripeBtn = () => {
        return (
            <Button onClick={() => stripe()} className="express-checkout-button" as={Col}>
                <FaCcStripe className="express-checkout-icon" />
            </Button>
        )
    }

    const GooglePayBtn = () => {
        return (
            <Button onClick={() => googlePay()} className="express-checkout-button" as={Col}>
                <FaGooglePay className="express-checkout-icon" />
            </Button>
        )
    }

    return (
        <div className="express-checkout">
            <div className="express-checkout-content">
                <Divider>Express Checkout</Divider>
                <Card className="express-checkout-card">
                    <Row className="express-checkout-row">
                        <StripeBtn />
                        <GooglePayBtn />
                    </Row>
                </Card>
            </div>
        </div >
    );
};

// export const ExpressCheckoutGooglePay = () => {
//     return (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//             <div style={{ width: "90%" }}>
//                 <Divider>Express Checkout</Divider>
//                 <Card style={{ padding: "5px", border: "none" }}>
//                     <Row style={{ width: "100%" }}>
//                         <GooglePayButton
//                             environment="TEST"
//                             paymentRequest={{
//                                 apiVersion: 2,
//                                 apiVersionMinor: 0,
//                                 allowedPaymentMethods: [
//                                     {
//                                         type: "CARD",
//                                         parameters: {
//                                             allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//                                             allowedCardNetworks: ["VISA", "MASTERCARD"]
//                                         },
//                                         tokenizationSpecification: {
//                                             type: "PAYMENT_GATEWAY",
//                                             parameters: {
//                                                 gateway: "example",
//                                                 gatewayMerchantId: "exampleGatewayMerchantId"
//                                             }
//                                         }
//                                     }
//                                 ],
//                                 merchantInfo: {
//                                     merchantId: "12345678901234567890",
//                                     merchantName: "Demo Merchant"
//                                 },
//                                 transactionInfo: {
//                                     totalPriceStatus: "FINAL",
//                                     totalPrice: "123.45",
//                                     currencyCode: "USD"
//                                 }
//                             }}
//                             onLoadPaymentData={(paymentRequest) => {
//                                 console.log("Success", paymentRequest);
//                             }}
//                         />
//                         <Button style={{ width: "60%", backgroundColor: "black", border: "none", margin: "5px" }} as={Col}><FaGooglePay style={{ width: "30px", height: "30px" }} /></Button>
//                     </Row>
//                 </Card>
//             </div>
//         </div>
//     )
// }

// export const ExpressCheckoutStripe = async () => {
//     const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
//     stripe.redirectToCheckout({
//         lineItems: [{ price: 'price_1Hh1SWHipyrrth0yQ5NJnP2t', quantity: 1 }],
//         mode: 'payment',
//         successUrl: 'https://your-website.com/success',
//         cancelUrl: 'https://your-website.com/cancel',
//     });
//     return (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//             <div style={{ width: "90%" }}>
//                 <Divider>Express Checkout</Divider>
//                 <Card style={{ padding: "5px", border: "none" }}>
//                     <Row style={{ width: "100%" }}>
//                         <Button style={{ width: "60%", backgroundColor: "orange", border: "none", margin: "5px" }} as={Col}><FaCcPaypal style={{ width: "30px", height: "30px" }} /></Button>
//                         <Button style={{ width: "60%", backgroundColor: "black", border: "none", margin: "5px" }} as={Col} onClick={stripe}><FaGooglePay style={{ width: "30px", height: "30px" }} /></Button>
//                     </Row>
//                 </Card>
//             </div>
//         </div>
//     )
// }