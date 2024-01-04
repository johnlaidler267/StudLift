//React Components
import React, { navigate } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

//Icons
import { AiOutlineFrown } from 'react-icons/ai';

import Divider from '@mui/material/Divider';

//Photos
import noorders from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/noorders.png';


// Displays a grid of orders made by user
export const OrderGrid = ({ orders }) => {

    // Displays an idividual order (as part of grid)
    const Order = ({ order }) => {
        const dateDelivered = order.dateDelivered;
        const datePlaced = order.datePlaced;
        const total = order.OrderTotal
        const orderNum = order.OrderNumber;
        const first = order.shippingAddress.first
        const last = order.shippingAddress.last

        // Converts Date object to form "Month Day"
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

        const OrderHeader = () => {

            const OrderDate = () => {
                return (
                    <p style={{ paddingRight: '30px' }}><span style={{ fontSize: '0.75em' }}>ORDER PLACED </span><br></br>
                        {formatDate(datePlaced)}
                    </p>
                )
            }

            const OrderTotal = () => {
                return (
                    <p style={{ paddingRight: '30px' }}>
                        <span style={{ fontSize: '0.75em' }}>TOTAL </span><br />
                        {total}
                    </p>
                )
            }

            const OrderName = () => {
                return (
                    <p style={{ paddingRight: '30px' }}>
                        <span style={{ fontSize: '0.75em' }}>SHIP TO: </span><br />
                        {first} {last}
                    </p>
                )
            }

            const OrderNumber = () => {
                return (
                    <p style={{ paddingLeft: '200px' }}>
                        <span style={{ fontSize: '0.75em' }}>ORDER #: </span><br />
                        {orderNum}
                    </p>
                )
            }

            return (
                <Card.Header className='d-flex flex-row'>
                    <OrderDate />
                    <OrderTotal />
                    <OrderName />
                    <OrderNumber />
                </Card.Header>
            )
        }

        const OrderDetails = () => {

            const DeliveryDate = () => {
                return (
                    <Card.Title style={{ paddingTop: '5px', fontSize: '1.5em', marginRight: '10px' }}><b>Delivered {formatDate(dateDelivered)}</b></Card.Title>
                )
            }

            const DropoffInfo = () => {
                return (
                    <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}>Your package was left near the front door or porch.</Card.Text>
                )
            }

            const Products = () => {

                //Displays a product as part of an order
                const ProductCard = ({ item }) => {
                    const imgURL = item.product._imageURL;
                    const name = item.product._name;

                    const ProductImg = () => {
                        return (
                            <Card.Img src={imgURL} style={{ width: '20%', objectFit: 'cover' }}></Card.Img>
                        )
                    }

                    const ProductName = () => {
                        return (
                            <Card.Text style={{ color: 'gray', fontSize: '1em' }}>{name}</Card.Text>
                        )
                    }

                    return (
                        <div className='d-flex flex-row align-items-center'>
                            <ProductImg />
                            <ProductName />
                            <Divider />
                        </div>
                    )
                }

                return (
                    <>
                        {order.cart.map(cartItem => (<ProductCard item={cartItem} />))}
                    </>
                )
            }

            return (
                <div className='d-flex flex-column' style={{ paddingTop: '8px' }}>
                    <DeliveryDate />
                    <DropoffInfo />
                    <Products />
                </div>
            )
        }

        return (
            <Card className='border-0 m-0 w-100'>
                <Card.Body>
                    <OrderHeader />
                    <OrderDetails />
                </Card.Body>
            </Card >
        )
    }

    return (
        <div className='w-100' style={{ padding: '20px' }}>
            <Row>
                {orders.map(order => (<Col><Order order={order} /></Col>))}
            </Row>
        </div>
    )
}

// Displayed when the user hansn't placed an order
export const NoOrdersCard = () => {

    const NoOrdersHeader = () => {
        return (
            <Card.Title id='no-orders-title'>No Orders <AiOutlineFrown className='mx-2' /></Card.Title>
        )
    }

    const NoOrdersImg = () => {
        return (
            <Card.Img id='no-orders-img' src={noorders} />
        )
    }

    const ShopBtn = () => {
        return (
            <div className='w-100 d-flex justify-content-start'>
                <Button id='no-orders-btn' onClick={() => navigate("/")}>Go shopping!</Button>
            </div>
        )
    }

    return (
        <Card className='no-orders-card'>
            <Card.Body>
                <NoOrdersHeader />
                <Card.Text>
                    You currently have no orders to show.
                    Find products you like!
                </Card.Text>
                <NoOrdersImg />
            </Card.Body>
            <ShopBtn />
        </Card>
    )
}