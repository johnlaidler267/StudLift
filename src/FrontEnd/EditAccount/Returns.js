//React Components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'


export default function Returns() {
    return (
        <Card>

            <div className='return-header-div'>
                <h1>Return Items</h1>
                <h5>Select Items to Return</h5>
            </div>

            <div className='return-card-div'>
                <Card className='return-card'>
                    <Row>
                        <Col xs={1}>
                            <input className='return-check' type='checkbox' />
                        </Col>
                        <Col xs={3}>
                            <img src={Beanie} className='return-img' />
                        </Col>
                        <Col className='return-details-col' xs={8}>
                            <h5>Sharkhead Beanie</h5>
                            <h6>$25.00 USD</h6>
                            <br />
                        </Col>
                    </Row>
                </Card>
                <br />
                <Card className='return-card'>
                    <Row>
                        <Col xs={1}>
                            <input className='return-check' type='checkbox' />
                        </Col>
                        <Col xs={3}>
                            <img src={Beanie} className='return-img' />
                        </Col>
                        <Col className='return-details-col' xs={8}>
                            <h5>Sharkhead Beanie</h5>
                            <h6>$25.00 USD</h6>
                            <br />
                        </Col>
                    </Row>
                </Card>
                <br />
                <Card className='return-card'>
                    <Row>
                        <Col xs={1}>
                            <input className='return-check' type='checkbox' />
                        </Col>
                        <Col xs={3}>
                            <img src={Beanie} className='return-img' />
                        </Col>
                        <Col className='return-details-col' xs={8}>
                            <h5>Sharkhead Beanie</h5>
                            <h6>$25.00 USD</h6>
                            <br />
                        </Col>
                    </Row>
                </Card>
                <br />
                <Button className='return-btn' variant='dark'>Return Selected Items</Button>
                <br />
            </div>

        </Card>
    )
};