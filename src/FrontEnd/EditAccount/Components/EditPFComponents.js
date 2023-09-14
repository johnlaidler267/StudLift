//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'

//React Components
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { RiOrderPlayFill } from 'react-icons/ri';

import Divider from '@mui/material/Divider';

export const ProductCard = ({ item }) => {
    console.log(`The current product inside ProductCard is ${JSON.stringify(item)}`);
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Card.Img src={item.product._imageURL} style={{ width: '20%', objectFit: 'cover' }}></Card.Img>
            <Card.Text style={{ color: 'gray', fontSize: '1em' }}>{item.product._name}</Card.Text>
            <Divider />
        </div>
    )
}

function formatDate(inputDateString) {
    const inputDate = new Date(inputDateString);

    // Define arrays for month names and date suffixes
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const dateSuffixes = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"];

    // Extract components of the date
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    const day = inputDate.getDate();

    // Get the appropriate date suffix for the day
    const dateSuffix = dateSuffixes[day - 1];

    // Create the formatted date string
    const formattedDate = `${months[month]} ${day}${dateSuffix}, ${year}`;

    return formattedDate;
}

export const OrderGrid = ({ orders }) => {
    console.log(`The orders are ${typeof (orders)}`)
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Row>
                <Col>
                    <RiOrderPlayFill />
                </Col>
            </Row>
            <Row>
                {orders.map(order => (<Col><Order order={order} /></Col>))}
            </Row>
        </div>
    )
}

const Order = ({ order }) => {
    console.log(`The order is ${JSON.stringify(order)}`)
    return (
        <Card style={{ border: 'none', margin: 'none', width: '100%' }}>
            <Card.Body>
                <Card.Header style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ paddingRight: '30px' }}><span style={{ fontSize: '0.75em' }}>ORDER PLACED </span><br></br>
                        {formatDate(order.datePlaced)}
                    </p>
                    <p style={{ paddingRight: '30px' }}>
                        <span style={{ fontSize: '0.75em' }}>TOTAL </span><br />
                        {order.total}
                    </p>
                    <p style={{ paddingRight: '30px' }}>
                        <span style={{ fontSize: '0.75em' }}>SHIP TO: </span><br />
                        {order.shippingAddress.first} {order.shippingAddress.last}
                    </p>
                    <p style={{ paddingLeft: '200px' }}>
                        <span style={{ fontSize: '0.75em' }}>ORDER #: </span><br />
                        {order.orderNumber}
                    </p>
                </Card.Header>

                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '8px' }}>
                    <Card.Title style={{ paddingTop: '5px', fontSize: '1.5em', marginRight: '10px' }}><b>Delivered {formatDate(order.dateDelivered)}</b></Card.Title>
                    <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}>Your package was left near the front door or porch.</Card.Text>
                    {order.cart.map(cartItem => (<ProductCard item={cartItem} />))}
                </div>
            </Card.Body>
        </Card >
    )
}