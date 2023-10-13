import '../../Styling/EditAccount.css'

//React Components
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, createContext } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

//Photos
import header from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/accountdetails.png';
import noorders from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/noorders.png';

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebasedb } from '../../../../BackEnd/firebase/firebase';

// Custom Components
import { OrderGrid } from '../../Components/EditPFComponents';
import { signOut } from 'firebase/auth';
import { LoginContext } from '../../../../App';

//Helper functions
import { getUserDetails } from '../../../../BackEnd/commonFunctions';

//Icons
import { AiOutlineFrown } from 'react-icons/ai';

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

    // =================================================================
    // -> Handle the logout function

    const handleLogout = async () => {
        console.log('Trying to log out')
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
        console.log(`Value of user is ${user}`)
        if (!user) {
            navigate("/login")
        }
        else {
            getUserDetails(user.uid).then((data) => {
                setUserDetails(data);
                setDefaultCard(data.Cards[data.DefaultCardIdx])
                setOrders(data.Orders)
            });
        }
    }, []);
    //================================================================

    const NoOrdersCard = () => {
        return (
            <Card className='no-orders-card'>
                <Card.Body>
                    <Card.Title id='no-orders-title'>No Orders <AiOutlineFrown className='mx-2' /></Card.Title>
                    <Card.Text>
                        You currently have no orders to show.
                        Find products you like!
                    </Card.Text>
                    <Card.Img id='no-orders-img' src={noorders} />
                    
                </Card.Body>
                <div className='w-100 d-flex justify-content-start'>
                    <Button id='no-orders-btn' onClick={() => navigate("/")}>Go shopping!</Button>
                </div>
            </Card>
        )
    }


    return (
        <div className='editp-background-div'>
            <Card className='editp-background-card'>
                <Row>
                    <Col xs={3}>

                        <Card className='sidebar-card'>
                            {user.displayName && (<h5>{user.displayName} </h5>)}
                            {!user.displayName && (<h5>{userDetails.First} {userDetails.Last}</h5>)}

                            <h5 className='subheader'>{user.email}</h5>
                            <br />
                            <Button onClick={handleLogout} variant='light' className='change-btn'>SIGN OUT</Button>
                            <br />
                            <Divider />
                            <br />
                            <h5 className='subheader'>BILLING ADDRESS</h5>

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
                            )}

                            {(userDetails.Billing && userDetails.Billing.AddLine1 != '') && <Button onClick={() => navigate('/revise-billing')} variant='light' className='change-btn'>CHANGE</Button>}
                            {(!userDetails.Billing || userDetails.Billing.AddLine1 == '') && <Button onClick={() => navigate('/revise-billing')} variant='light' className='change-btn'>ADD NEW</Button>}

                            <br />
                            <Divider />
                            <br />

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

                            {(userDetails.Shipping && userDetails.Shipping.AddLine1 != '') && <Button onClick={() => navigate('/revise-shipping')} variant='light' className='change-btn'> CHANGE</Button>}
                            {(!userDetails.Shipping || userDetails.Shipping.AddLine1 == '') && <Button onClick={() => navigate('/revise-shipping')} variant='light' className='change-btn'>ADD NEW</Button>}

                            <br />
                        </Card>

                        <br />

                        <Card className='sidebar-card'>
                            <h5 className='subheader'>PAYMENT METHOD</h5>

                            {userDetails.Cards && (<p>{defaultCard.Type + " ending in •••• " + defaultCard.Number.substring(defaultCard.Number.length - 4)}</p>)}
                            {!userDetails.Cards && (<p></p>)}

                            {userDetails.Cards && <Button onClick={() => navigate('/revise-payment')} variant='light' className='change-btn'> CHANGE</Button>}
                            {!userDetails.Cards && <Button onClick={() => navigate('/revise-payment')} variant='light' className='change-btn'>ADD NEW</Button>}

                        </Card>

                        <br />

                        <Card className='sidebar-card'>
                            <h5 className='subheader'>RETURNS</h5>
                            <Button href='returns' variant='dark'>RETURN ITEMS</Button>
                        </Card>

                    </Col>

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

                </Row >
            </Card >
        </div >
    );
}

export default Main;
