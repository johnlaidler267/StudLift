import '../Components/QuantityPicker/QuantityPicker.css';
import * as React from 'react';
import { Card, Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { AiFillPrinter } from 'react-icons/ai'
import { MdAttachEmail } from 'react-icons/md'
import one from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/one.webp'



function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}



export default function OrderConfirmation() {

    const SummaryItem = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: "2em" }}>
                    <Card.Img variant="right" src={one} alt="My Image" style={{ width: "7em", height: "9em", overflow: "visible" }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", padding: "10px" }}>
                    <h6>Legacy Ruched Tight Shorts - Black (x1)</h6>
                    <p style={{ color: "slategray", fontSize: "0.8em" }}>Medium</p>
                    <br />
                    <p style={{ fontSize: "0.8em" }}>$49.99</p>
                </div>
            </div>
        )
    }

    const Summary = () => {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Card style={{ border: "none", borderRadius: "10px", padding: "15px", width: "90%" }}>
                    <h4>Order Summary</h4>
                    <p style={{ fontSize: "0.9em", color: "lightslategray" }}>An overview of your transaction was sent to jlaidler@umass.edu.</p>
                    <ListGroup variant="flush">
                        <ListGroup.Item><SummaryItem /></ListGroup.Item>
                        <ListGroup.Item><SummaryItem /></ListGroup.Item>
                        <ListGroup.Item><SummaryItem /></ListGroup.Item>
                    </ListGroup>

                </Card>
            </div >
        )
    }

    const SubtotalShipping = () => {
        return (
            <div style={{ width: "80%" }}>
                <Row style={{ padding: "10px" }}>
                    <Col xs={10}>
                        <h6>Subtotal</h6>
                    </Col>
                    <Col xs={2}>
                        $94.00
                    </Col>
                </Row>
                <Row style={{ padding: "10px" }}>
                    <Col xs={10}>
                        <h6>Shipping</h6>
                    </Col>
                    <Col xs={2} style={{ fontSize: "14px" }}>
                        FREE
                    </Col>
                </Row>
            </div>
        )
    }

    const Total = () => {
        return (
            <div style={{ width: "80%", height: "6%" }} >
                <Row style={{ padding: "10px" }}>
                    <Col xs={4}>
                        <h5>Total</h5>
                    </Col>
                    <Col xs={{ offset: 6, span: 2 }}>
                        <p>USD <span style={{ fontSize: "25px" }}><b>$95.00</b></span></p>
                    </Col>
                </Row>
            </div >
        )

    }

    return (
        <Container style={{
            maxWidth: "none", width: "101%", height: "100%"
        }}>
            <Card style={{ width: "100%", height: "100%", border: "none", display: "flex", alignItems: "center" }}>
                <Card style={{ margin: "30px", border: "none" }}><h1>Thanks, your order was confirmed. </h1></Card>
                <Card style={{ color: "slategray", border: "none" }}><h3>Order #700022708954</h3></Card>
                <br />
                <Summary />
                <br />
                <SubtotalShipping />
                <Total />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", width: "80%" }}>
                    <Button variant="dark" style={{ margin: "10px" }}><MdAttachEmail /></Button>
                    <Button variant="light" style={{ margin: "10px" }}><AiFillPrinter /></Button>
                </div>
            </Card >
        </Container >
    );
}