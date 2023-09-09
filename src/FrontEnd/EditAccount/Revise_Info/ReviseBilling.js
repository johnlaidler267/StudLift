//custom styling
import '../EditAccount.css';

//react components
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

import { getUserDetails, updateBillingAddress } from '../../../BackEnd/commonFunctions';

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebasedb } from '../../../BackEnd/firebase/firebase';

const ReviseBilling = () => {
    // initialize the navigate function to redirect to other pages
    const navigate = useNavigate();
    //================================================================
    // -> store the user logged in in the user variable

    const [user, loading] = useAuthState(auth);

    //================================================================
    //-> Pull user details from MongoDB

    const [userDetails, setUserDetails] = useState({}); //Stores user data
    const [existingAddress, setExistingAddress] = useState({}); //stores existing address
    const [form, setForm] = useState({}); //Sets the form values

    useEffect(() => {
        try {
            getUserDetails(user.uid).then((data) => {
                //-> Set the account userDetails 
                setUserDetails(data);

                //-> Set the exisiting billing address information
                setExistingAddress(data.Billing);

                // -> Initialize state variables for form fields
                setForm({
                    AddLine1: data.Billing.AddLine1,
                    AddLine2: data.Billing.AddLine2,
                    City: data.Billing.City,
                    State: data.Billing.State,
                    Zip: data.Billing.Zip,
                });

            });
        }
        catch {
            setUserDetails(null);
        }
    }, []);

    // =================================================================
    /**
     * Handle form field changes and update the form state accordingly.
     * @param {string} value - The new value of the field.
     * @param {string} field - The field name to update.
     */
    const handleFormChange = (value, field) => {
        console.log("Form before change " + JSON.stringify(form));
        setForm(form => ({
            ...form,
            [field]: value
        }));
        console.log("Form changed " + JSON.stringify(form));
    }
    //================================================================
    // -> Save the form changes to MongoDB

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            //................................................................
            // -> Add to MongoDB database

            //Create a data object containing user info
            const updatedAddress = {
                AddLine1: form.AddLine1 || existingAddress.AddLine1,
                AddLine2: form.AddLine2 || existingAddress.AddLine2,
                City: form.City || existingAddress.City,
                State: form.State || existingAddress.State,
                Zip: form.Zip || existingAddress.Zip,
            };

            //Make a PATCH request to update MongoDB
            updateBillingAddress(updatedAddress, userDetails, user.uid)
            // ...............................................................
            // -> Redirect to the account edit page
            navigate("/edit-profile");
        }
        catch (error) {
            // Handle registration errors, e.g., display an error message to the user.
            alert(error);
        }
    }
    //================================================================
    return (
        <div>
            <Card id='background' className='background-card'>

                <div id='page-content' className='content'>

                    <div id='header' className='header'>
                        <h3>REVISE BILLING DETAILS</h3>
                        <p className='sub-header'>Edit your billing address details below.</p>
                    </div>

                    <div id='address-div' className='form-div'>
                        <Form id='address-form' className='address'>

                            <Form.Group className="mb-3" controlId="AddLine1">
                                <Form.Control placeholder="Address Line 1" value={form.AddLine1} onChange={(event) => handleFormChange(event.target.value, 'AddLine1')} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="AddLine2">
                                <Form.Control placeholder="Apartment, studio, or floor" value={form.AddLine2} onChange={(event) => handleFormChange(event.target.value, 'AddLine2')} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="City">
                                    <Form.Control placeholder="City" value={form.City} onChange={(event) => handleFormChange(event.target.value, 'City')} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="State" >
                                    <Form.Select defaultValue="State" value={form.State} onChange={(event) => handleFormChange(event.target.value, 'State')}>
                                        <option>State</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="Zip" >
                                    <Form.Control placeholder="Zip" value={form.Zip} onChange={(event) => handleFormChange(event.target.value, 'Zip')} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <div className='save-button-div'>
                                    <Button onClick={handleSave} variant="dark" type="submit" className='save-button'>
                                        <b>SAVE DETAILS</b>
                                    </Button>
                                </div>
                            </Row>
                        </Form>

                    </div>
                </div>

            </Card>
        </div>
    )
}

export default ReviseBilling;