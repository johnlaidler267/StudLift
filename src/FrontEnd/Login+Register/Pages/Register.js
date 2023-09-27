//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../Styling/Register.css'

// IMPORT firebase events
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

//IMPORT React components
import React, { useState, useEffect } from 'react';
import { Card, Container, Button, Form, FloatingLabel, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//IMPORT Helper functions
import validateRegister from '../HelperFunctions/validateRegister';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * This component represents the registration form for creating a new user account.
 */
export default function Register() {
    // initialize the navigate function to redirect to other pages
    const navigate = useNavigate();

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> Initialize state variables for form fields

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

    // .................................................................

    /**
     * Handle form field changes and update the form state accordingly.
     * @param {string} value - The new value of the field.
     * @param {string} field - The field name to update.
     */
    const handleFormChange = (value, field) => {
        setForm({ ...form, [field]: value });
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    /**
     * Handle the registration form submission.
     * @param {object} event - The form submission event.
     */
    const handleRegister = async (event) => {
        event.preventDefault();
        setErrors(validateRegister(form));
        setSubmitting(true);
    }

    // .................................................................

    //If trying to submit the form, and no errors, then finish the submission
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

    // .................................................................

    //Handles the firebase authentication and MongoDB database
    const finishSubmit = async () => {
        try {
            //................................................................
            // -> Firebase authentication

            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
            const firebaseId = userCredential.user.uid;

            //................................................................
            // -> Add to MongoDB database

            //Create a data object containing user info
            const userData = {
                firebase: firebaseId,
                email: form.email,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName,
                gender: form.gender
            };

            // Make a POST request to your backend API endpoint
            const response = await fetch('http://localhost:3000/record/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData),
            }).catch(err => {
                window.alert(err)
                return;
            });

            // ...............................................................
            // -> Redirect to the home page
            navigate("/");
        } catch (error) {
            // Handle registration errors, e.g., display an error message to the user.
            console.log(error);
        }
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
                        {errors.email ? (
                            <p className="error">
                                {errors.email}
                            </p>
                        ) : null}

                        <h9>PASSWORD* </h9>
                        <FloatingLabel label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" value={form.password} onChange={(event) => handleFormChange(event.target.value, 'password')} />
                        </FloatingLabel>
                        {errors.password ? (
                            <p className="error">
                                {errors.password}
                            </p>
                        ) : null}

                        <h9>CONFIRM PASSWORD* </h9>
                        <FloatingLabel label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" value={form.confirmPassword} onChange={(event) => handleFormChange(event.target.value, 'confirmPassword')} />
                        </FloatingLabel>
                        {errors.confirmPassword ? (
                            <p className="error">
                                {errors.confirmPassword}
                            </p>
                        ) : null}

                        <h9>GENDER* </h9>
                        <FloatingLabel
                            label="Gender"
                            className="mb-3"
                        >
                            <Form.Select value={form.gender} onChange={(event) => handleFormChange(event.target.value, 'gender')}>
                                <option>Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Prefer Not To Say</option>
                            </Form.Select>

                        </FloatingLabel>
                        {errors.gender ? (
                            <p className="error">
                                {errors.gender}
                            </p>
                        ) : null}

                        <h9>DATE OF BIRTH* </h9>
                        <FloatingLabel
                            label="dob"
                            className="mb-3"
                        >
                            <Form.Control type="date" name='date_of_birth' value={form.dateOfBirth} onChange={(event) => handleFormChange(event.target.value, 'dateOfBirth')} />
                        </FloatingLabel>
                        {errors.dateOfBirth ? (
                            <p className="error">
                                {errors.dateOfBirth}
                            </p>
                        ) : null}

                        <h9>FIRST NAME* </h9>
                        <FloatingLabel
                            label="First name"
                            className="mb-3"
                        >
                            <Form.Control placeholder="E.g. John" value={form.firstName} onChange={(event) => handleFormChange(event.target.value.replace(/\b\w/g, match => match.toUpperCase()), 'firstName')} />
                        </FloatingLabel>
                        {errors.firstName ? (
                            <p className="error">
                                {errors.firstName}
                            </p>
                        ) : null}

                        <h9>LAST NAME* </h9>
                        <FloatingLabel
                            label="Last name"
                            className="mb-3"
                        >
                            <Form.Control placeholder="E.g. Smith" value={form.lastName} onChange={(event) => handleFormChange(event.target.value.replace(/\b\w/g, match => match.toUpperCase()), 'lastName')} />
                        </FloatingLabel>
                        {errors.lastName ? (
                            <p className="error">
                                {errors.lastName}
                            </p>
                        ) : null}

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
                        <Button onClick={handleRegister} variant="dark" className='create-account-btn'>CREATE ACCOUNT</Button>
                        <br></br>
                        <br></br>
                    </form>
                </Card >
            </Container >
        </Card>
    );
}