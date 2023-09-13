import './Payment.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Card, Container, Row, Col, Form, Button, Accordion, InputGroup, FloatingLabel } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export const UserLICreditCardForm = ({ cards }) => {
    const [activeCard, setActiveCard] = useState({});
    //=================================================================
    // -> Handle the active card (info to be edited) selection change
    const handleActiveCardChange = (event) => {
        //The active card = card with index # of the selected card option
        const activeCardId = JSON.parse(event.target.value).id;
        setActiveCard(cards[activeCardId]);
    }
    //=================================================================
    return (
        <div id='card-selection-div'>
            <Card id='card-selection-card'>
                <h4>Payment</h4>
                <p className='header-description'>All transactions are secure and encrypted.</p>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <b>Select Credit/Debit Card</b>
                        </Accordion.Header>
                        <Accordion.Body>
                            {/* Card selection */}
                            <InputGroup className="mb-3 card-select" controlId="cardSelect" >
                                <Form.Select onChange={handleActiveCardChange}>
                                    <option value={JSON.stringify(activeCard)}>{activeCard.name}</option>
                                    {
                                        cards.map(currCard => {
                                            if (currCard.name != activeCard.name)
                                                return (<option value={JSON.stringify(currCard)} key={currCard.id}>{currCard.name}</option>)
                                        })
                                    }
                                </Form.Select>
                            </InputGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <b>Use a Different Card</b>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Form style={{ padding: "10px" }}>
                                <Row className="mb-3">

                                    <InputGroup className="mb-3" controlId="cardNumber">
                                        <Form.Control placeholder="Card Number" aria-describedby="lock-icon" style={{ borderRight: "none" }} />
                                        <InputGroup.Text id="lock-icon" style={{ backgroundColor: "white", borderLeft: "none" }} ><AiFillLock /> </InputGroup.Text>
                                    </InputGroup>

                                    <Form.Group className="mb-3">
                                        <Form.Control placeholder="Name on Card" />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Control placeholder="Expiration date (MM/YY)" />
                                    </Form.Group>

                                    <InputGroup as={Col}>
                                        <Form.Control placeholder="Security Code" aria-describedby="question-icon" style={{ borderRight: "none" }} />
                                        <InputGroup.Text id="question-icon" style={{ backgroundColor: "white", borderLeft: "none" }}><AiFillQuestionCircle /> </InputGroup.Text>
                                    </InputGroup>
                                </Row>
                            </Form>
                        </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <b>PayPal</b>
                        </Accordion.Header>
                        <Accordion.Body>
                            //TODO: PayPal Integration
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Card>
        </div>
    );
}

export const UserNLICreditCardForm = () => {
    return (<div>User NLI Form</div>);
}

export const BillingForm = ({ form, setForm, setSameAsShipping }) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const handleFormChange = (value, field) => {
        setForm(form => ({
            ...form,
            [field]: value
        }));
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~)
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Card style={{ border: "none", borderRadius: "10px", padding: "15px", width: "90%" }}>

                {/* Header & Description */}
                <h4>Billing address</h4>
                <p style={{ fontSize: "0.9em", color: "lightslategray" }}>Select the address that matches your card or payment method.</p>

                {/* Billing-Address Accordion */}
                <Accordion defaultActiveKey="true" onSelect={(eventKey) => setSameAsShipping(JSON.parse(eventKey))}>

                    {/* Same as Shipping Address */}
                    <Accordion.Item eventKey="true">
                        <Accordion.Header>
                            <b>Same as shipping addresss</b>
                        </Accordion.Header>
                    </Accordion.Item>

                    {/* Use a Different Address */}
                    <Accordion.Item eventKey="false">
                        <Accordion.Header>
                            <b>Use a different billing addresss</b>
                        </Accordion.Header>
                        <Accordion.Body>
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
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Card >
        </div >
    );
}