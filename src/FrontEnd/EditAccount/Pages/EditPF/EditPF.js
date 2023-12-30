import '../../Styling/EditAccount.css'

//React Components
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, createContext } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

//Photos
import header from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/accountdetails.png';

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebasedb } from '../../../../BackEnd/firebase/firebase';

// Custom Components
import { OrderGrid, NoOrdersCard } from '../../Components/EditPFComponents';
import { signOut } from 'firebase/auth';
import { LoginContext } from '../../../../App';

//Helper functions
import { getUserDetails } from '../../../../BackEnd/commonFunctions';

function Main() {
    // =================================================================
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================
    // -> store the user logged in in the user variable

    const [user, loading] = useAuthState(auth);
    const [userDetails, setUserDetails] = useState({});
    const [defaultCard, setDefaultCard] = useState({});
    const [orders, setOrders] = useState([]);

    // const [userInfoContext, setUserInfoContext] = useContext(UserInfoContext);
    // const {Orders, Cards, DefaultCardIdx} = userInfoContext;

    // =================================================================
    // -> Handle the logout function

    const handleLogout = async () => {
        try {
            await firebasedb.logout();
            navigate('/login')
        }
        catch (error) {
            console.log(error);
        }
    }
    // =================================================================
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
        else {

            // setUserDetails(userInfoContext);
            // setOrders(Orders)
            // setDefaultCard(Cards[DefaultCardIdx])

            getUserDetails(user.uid).then((data) => {
                setUserDetails(data);
                setDefaultCard(data.Cards[data.DefaultCardIdx])
                setOrders(data.Orders)
            });
        }
    }, []);
    //================================================================
    const BillingInfo = () => {
        return (
            <><h5 className='subheader'>BILLING ADDRESS</h5>

                {(userDetails.Billing && userDetails.Billing.AddLine1 != '') && (
                    <div>
                        <p>
                            {userDetails.Billing.AddLine1}
                            <br></br>
                            {userDetails.Billing.AddLine2}
                            <br></br>
                            {userDetails.Billing.City + "," + userDetails.Billing.State + "," + userDetails.Billing.Zip}
                        </p>

                    </div>
                )}</>
        )
    }

    const ShippingInfo = () => {
        return (
            <>
                <h5 className='subheader'>SHIPPING ADDRESS</h5>
                {(userDetails.Shipping && userDetails.Shipping.AddLine1 != '') && (
                    <div>
                        <p>
                            {userDetails.Shipping.AddLine1}
                            <br></br>
                            {userDetails.Shipping.AddLine2}
                            <br></br>
                            {userDetails.Shipping.City + "," + userDetails.Shipping.State + "," + userDetails.Shipping.Zip}
                        </p>

                    </div>
                )}
            </>
        )
    }

    const EditBillingBtn = () => {
        return (
            <>
                {(userDetails.Billing && userDetails.Billing.AddLine1 != '') && <Button onClick={() => navigate('/revise-billing')} variant='light' className='change-btn'>CHANGE</Button>}
                {(!userDetails.Billing || userDetails.Billing.AddLine1 == '') && <Button onClick={() => navigate('/revise-billing')} variant='light' className='change-btn'>ADD NEW</Button>}
            </>
        )
    }

    const EditShippingBtn = () => {
        return (
            <>
                {(userDetails.Shipping && userDetails.Shipping.AddLine1 != '') && <Button onClick={() => navigate('/revise-shipping')} variant='light' className='change-btn'> CHANGE</Button>}
                {(!userDetails.Shipping || userDetails.Shipping.AddLine1 == '') && <Button onClick={() => navigate('/revise-shipping')} variant='light' className='change-btn'>ADD NEW</Button>}
            </>
        )
    }

    const DisplayUser = () => {
        return (
            <>
                {user.displayName && (<h5>{user.displayName} </h5>)}
                {!user.displayName && (<h5>{userDetails.First} {userDetails.Last}</h5>)}
                <h5 className='subheader'>{user.email}</h5>
            </>
        )
    }

    const SignOutBtn = () => {
        return (
            <Button onClick={handleLogout} variant='light' className='change-btn'>SIGN OUT</Button>
        )
    }

    const OrderHistory = () => {
        return (
            <Col className='order-history-col'>
                <div className='w-100'>
                    <div className='account-details-header-div'>
                        <Card.Img src={header} className='account-details-header'></Card.Img>
                    </div>
                    <Divider light={false} variant="fullWidth" />
                    <div>
                        <OrderGrid orders={orders} />
                    </div >
                    <div className='d-flex w-100 justify-content-center'>
                        {orders.length == 0 && (<NoOrdersCard />)}
                    </div>
                </div >
            </Col >
        )
    }

    const Returns = () => {
        return (
            <Card className='sidebar-card'>
                <h5 className='subheader'>RETURNS</h5>
                <Button href='returns' variant='dark'>RETURN ITEMS</Button>
            </Card>
        )
    }

    const PaymentInfo = () => {
        return (
            <>
                <h5 className='subheader'>PAYMENT METHOD</h5>
                {userDetails.Cards && (<p>{defaultCard.Type + " ending in •••• " + defaultCard.Number.substring(defaultCard.Number.length - 4)}</p>)}
                {!userDetails.Cards && (<p></p>)}
            </>
        )
    }

    const EditPaymentBtn = () => {
        return (
            <>
                {userDetails.Cards && <Button onClick={() => navigate('/revise-payment')} variant='light' className='change-btn'> CHANGE</Button>}
                {!userDetails.Cards && <Button onClick={() => navigate('/revise-payment')} variant='light' className='change-btn'>ADD NEW</Button>}

            </>
        )
    }

    return (
        <div className='editp-background-div'>
            <Card className='editp-background-card'>
                <Row>
                    <Col xs={3}>
                        <Card className='sidebar-card'>
                            <DisplayUser />
                            <SignOutBtn />
                            <br />
                            <br />
                            <Divider />
                            <br />
                            <BillingInfo />
                            <EditBillingBtn />
                            <br />
                            <Divider />
                            <br />
                            <ShippingInfo />
                            <EditShippingBtn />
                            <br />
                        </Card>
                        <br />
                        <Card className='sidebar-card'>
                            <PaymentInfo />
                            <EditPaymentBtn />
                        </Card>
                        <br />
                        <Returns />
                    </Col>
                    <OrderHistory />
                </Row >
            </Card >
        </div >
    );
}

export default Main;
