//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'

//React Components
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

export const ProductCard = () => {
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

export const CardGrid = () => {
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