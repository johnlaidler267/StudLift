import '../EditAccount.css'

//React Components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

//Photos
import header from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/accountdetails.png';

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebasedb } from '../../../BackEnd/firebase/firebase';

// Custom Components
import { CardGrid } from './Ep-Components';
import { signOut } from 'firebase/auth';


function Main() {

    // initialize the navigate function to redirect to other pages
    const navigate = useNavigate();

    // store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);

    const handleLogout = async () => {
        try {
            await firebasedb.logout();
        }
        catch (error) {
            console.log(error);
        }
    }


    //if there is no user signed in, redirect to the login page
    if (!user)
        navigate("/login")

    if (user) {
        return (
            <div className='editp-background-div'>
                <Card className='editp-background-card'>
                    <Row>
                        <Col xs={3}>

                            <Card className='sidebar-card'>
                                <h5>{user.displayName} </h5>
                                <h5 className='subheader'>{user.email}</h5>
                                <br />
                                <Button onClick={() => handleLogout} variant='light' className='change-btn'>SIGN OUT</Button>
                                <br />
                                <Divider />
                                <br />
                                <h5 className='subheader'>BILLING ADDRESS</h5>
                                <p>58 Garden St. <br />
                                    Sharon, MA <br />
                                    02067-01099<br /></p>
                                <Button href='/revise-billing' variant='light' className='change-btn'>CHANGE</Button>
                                <br />
                                <Divider />
                                <br />
                                <h5 className='subheader'>SHIPPING ADDRESS</h5>
                                <p>58 Garden St. <br />
                                    Sharon, MA <br />
                                    02067-01099<br /></p>
                                <Button href='/revise-shipping' variant='light' className='change-btn'> CHANGE</Button>
                                <br />
                            </Card>

                            <br />

                            <Card className='sidebar-card'>
                                <h5 className='subheader'>PAYMENT METHOD</h5>
                                <p>Discover it®<br />
                                    Credit card ending in •••• 6352 <br />
                                </p>
                                <Button href='/revise-payment' variant='light' className='change-btn'>EDIT</Button>
                            </Card>

                            <br />

                            <Card className='sidebar-card'>
                                <h5 className='subheader'>RETURNS</h5>
                                <Button href='returns' variant='dark'>RETURN ITEMS</Button>
                            </Card>

                        </Col>

                        <Col xs={9} className='order-history-col'>
                            <div>
                                <div className='account-details-header-div'>
                                    <Card.Img src={header} className='account-details-header'></Card.Img>
                                </div>
                                <Divider light={false} variant="fullWidth" />
                                < div >
                                    <CardGrid />
                                </div >
                            </div >
                        </Col >

                    </Row >
                </Card >
            </div >
        );
    }
}

export default Main;


