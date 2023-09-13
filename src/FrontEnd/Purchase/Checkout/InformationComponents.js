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


export const CheckoutForm = ({ user, form, setForm }) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
    const handleFormChange = (value, field) => {
        setForm(form => ({
            ...form,
            [field]: value
        }));
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <div style={{ padding: "12px" }}>
            <Row>
                <Col xs={7}>
                    <h5>Contact information</h5>
                </Col>
                <Col xs={5}>
                    {!user && <p style={{ fontSize: "12px" }}>Already have an account? <b>Sign in.</b></p>}
                </Col>
            </Row>
            <Form style={{ padding: "10px" }}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="email" placeholder="Email" value={form.Email} onChange={(event) => handleFormChange(event.target.value, 'Email')} />
                </Form.Group>
            </Form>
            <br />
            <h5>Shipping address</h5>
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
        </div >
    )
}