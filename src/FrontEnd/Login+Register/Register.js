//React components
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../BackEnd/firebase/firebase';
import React, { useState, useRef } from 'react';
import { Card, Container, Button, Form, FloatingLabel, Alert } from 'react-bootstrap';

export default function Register() {

    // initialize state variables for form fields
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        emailMarketing: false
    });

    const handleFormChange = (value, field) => {
        setForm({ ...form, [field]: value });
    }

    const handleRegister = (event) => {
        event.preventDefault();
    }

    return (
        <Card style={{ border: 'none' }}>
            <Container className='register-background-div'>

                <Card className='register-card'>
                    <h5><b>CREATE AN ACCOUNT</b></h5>
                    <p>Sign up and you’ll be able to manage your account, track orders, save products and access easier returns</p>

                    <form onSubmit={handleRegister}>

                        <h9>EMAIL* </h9>
                        <FloatingLabel
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" value={form.email} onChange={(event) => handleFormChange(event.target.value, 'email')} />
                        </FloatingLabel>

                        <h9>PASSWORD* </h9>
                        <FloatingLabel label="Password">
                            <Form.Control type="password" placeholder="Password" value={form.password} onChange={(event) => handleFormChange(event.target.value, 'password')} />
                        </FloatingLabel>

                        <h9>CONFIRM PASSWORD* </h9>
                        <FloatingLabel label="Password">
                            <Form.Control type="password" placeholder="Password" value={form.confirmPassword} onChange={(event) => handleFormChange(event.target.value, 'confirmPassword')} />
                        </FloatingLabel>

                        <h9>GENDER* </h9>
                        <FloatingLabel
                            label="Gender"
                            className="mb-3"
                        >
                            <Form.Select value={form.gender} onChange={(event) => handleFormChange(event.target.value, 'gender')}>
                                <option>Choose Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Prefer Not To Say</option>
                            </Form.Select>

                        </FloatingLabel>

                        <h9>DATE OF BIRTH* </h9>
                        <FloatingLabel
                            label="dob"
                            className="mb-3"
                        >
                            <Form.Control type="date" name='date_of_birth' value={form.dateOfBirth} onChange={(event) => handleFormChange(event.target.value, 'dateOfBirth')} />
                        </FloatingLabel>

                        <h9>FIRST NAME* </h9>
                        <FloatingLabel
                            label="First name"
                            className="mb-3"
                        >
                            <Form.Control placeholder="E.g. John" value={form.firstName} onChange={(event) => handleFormChange(event.target.value, 'firstName')} />
                        </FloatingLabel>

                        <h9>LAST NAME* </h9>
                        <FloatingLabel
                            label="Last name"
                            className="mb-3"
                        >
                            <Form.Control placeholder="E.g. Smith" value={form.lastName} onChange={(event) => handleFormChange(event.target.value, 'lastName')} />
                        </FloatingLabel>

                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="I wish to receive email marketing from StudentLifter."
                            style={{ fontSize: "12px" }}
                            value={form.emailMarketing}
                            onChange={(event) => handleFormChange(event.target.value, 'emailMarketing')}
                        />
                        <br />
                        <p>By creating your account, you agree to our Terms and Conditions. For full details of how and why Gymshark uses your personal information, please see our Privacy Notice.</p>
                        <br />
                        <Button variant="dark" className='create-account-btn'>CREATE ACCOUNT</Button>
                        <br></br>
                        <br></br>
                    </form>
                </Card >
            </Container >
        </Card>
    );
}