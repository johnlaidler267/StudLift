import './Account.css'

//React Components
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Photos/beanie.webp'
import header from '/Users/johnnylaidler/studentlifter/src/Photos/accountdetails.png';

function Main() {
    const ProductCard = () => {
        return (
            <Card style={{ border: 'none', margin: 'none', width: '100%' }}>
                <Card.Body>
                    <Card.Header style={{ display: 'flex', flexDirection: 'row' }}>
                        <p style={{ paddingRight: '30px' }}><span style={{ fontSize: '0.75em' }}>ORDER PLACED </span><br></br>
                            January 1, 2023
                        </p>
                        <p style={{ paddingRight: '30px' }}>
                            <span style={{ fontSize: '0.75em' }}>TOTAL </span><br />
                            $13.80
                        </p>
                        <p style={{ paddingRight: '30px' }}>
                            <span style={{ fontSize: '0.75em' }}>SHIP TO: </span><br />
                            John Laidler
                        </p>
                        <p style={{ paddingLeft: '200px' }}>
                            <span style={{ fontSize: '0.75em' }}>ORDER #: </span><br />
                            114-0284977-9484261
                        </p>
                    </Card.Header>

                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '8px' }}>
                        <Card.Title style={{ paddingTop: '5px', fontSize: '1.5em', marginRight: '10px' }}><b>Delivered January 3</b></Card.Title>
                        <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}>Your package was left near the front door or porch.</Card.Text>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Card.Img src={Beanie} style={{ width: '30%', marginRight: '10px' }}></Card.Img>
                            <Card.Text style={{ color: 'gray', fontSize: '1em' }}>Seamless Docker Beanie</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card >
        )
    }

    const CardGrid = () => {
        return (
            <div style={{ width: '100%', padding: '20px' }}>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
            <Card style={{ width: '85%', padding: '20px', border: 'none' }}>
                <Row>
                    <Col xs={3}>
                        <Card style={{ backgroundColor: '#ECECEC', padding: '20px', margin: '5px' }}>
                            <h5>JOHN LAIDLER </h5>
                            <h5 style={{ fontSize: '0.8em' }}>jlaidler@umass.edu</h5>
                            <Divider />
                            <br />
                            <h5 style={{ fontSize: '0.8em' }}>BILLING ADDRESS</h5>
                            <p>58 Garden St. <br />
                                Sharon, MA <br />
                                02067-01099<br /></p>
                            <Button variant='light' style={{ fontSize: '0.5em', width: '25%' }}>CHANGE</Button>
                            <br />
                            <Divider />
                            <br />
                            <h5 style={{ fontSize: '0.8em' }}>SHIPPING ADDRESS</h5>
                            <p>58 Garden St. <br />
                                Sharon, MA <br />
                                02067-01099<br /></p>
                            <Button variant='light' style={{ fontSize: '0.5em', width: '25%' }}>CHANGE</Button>
                            <br />
                        </Card>
                        <br />
                        <Card style={{ backgroundColor: '#ECECEC', padding: '20px', margin: '5px' }}>
                            <h5 style={{ fontSize: '0.8em' }}>PAYMENT METHOD</h5>
                            <p>Discover it®<br />
                                Credit card ending in •••• 6352 <br />
                            </p>
                            <Button variant='light' style={{ fontSize: '0.5em', width: '25%' }}>EDIT</Button>
                        </Card>
                        <br></br>
                        <Card style={{ backgroundColor: '#ECECEC', padding: '20px', margin: '5px' }}>
                            <h5 style={{ fontSize: '0.8em' }}>RETURNS</h5>
                            <Button variant='dark'>RETURN ITEMS</Button>
                        </Card>
                    </Col>
                    <Col xs={9} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
                                <Card.Img src={header} className='account-details-header'></Card.Img>
                            </div>
                            <Divider light={false} variant="fullWidth" />
                            <div>
                                <CardGrid />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Main;


