//IMPORT cstom styling
import '../../Styling/EditAccount.css'

//IMPORT React elements
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

//IMPORT Helper Functions
import { getUserDetails, updateBillingAddress } from '../../../../BackEnd/commonFunctions';

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../BackEnd/firebase/firebase';

const ReviseBilling = () => {
    // initialize the navigate function to redirect to other pages
    const navigate = useNavigate();
    //================================================================
    // -> store the user logged in in the user variable

    const [user] = useAuthState(auth);

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
        setForm(form => ({
            ...form,
            [field]: value
        }));
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

    const BillingHeader = () => {
        return (
            <div id='header' className='header'>
                <h3>REVISE BILLING DETAILS</h3>
                <p className='sub-header'>Edit your billing address details below.</p>
            </div>
        )
    }

    const BillingForm = () => {

        const InputAddLine1 = () => {
            return (
                <Form.Group className="mb-3" controlId="AddLine1">
                    <Form.Control placeholder="Address Line 1" value={form.AddLine1} onChange={(event) => handleFormChange(event.target.value, 'AddLine1')} />
                </Form.Group>
            )
        }

        const InputAddLine2 = () => {
            return (
                <Form.Group className="mb-3" controlId="AddLine2">
                    <Form.Control placeholder="Apartment, studio, or floor" value={form.AddLine2} onChange={(event) => handleFormChange(event.target.value, 'AddLine2')} />
                </Form.Group>
            )
        }

        const InputCity = () => {
            return (
                <Form.Group as={Col} controlId="City">
                    <Form.Control placeholder="City" value={form.City} onChange={(event) => handleFormChange(event.target.value, 'City')} />
                </Form.Group>
            )
        }

        const InputState = () => {

            const stateAbbreviations = [
                'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
                'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
                'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
                'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
                'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
            ];

            return (
                <Form.Group as={Col} controlId="State" >
                    <Form.Select defaultValue="State" value={form.State} onChange={(event) => handleFormChange(event.target.value, 'State')}>
                        <option>State</option>
                        {stateAbbreviations.map((state) => <option>{state}</option>)}
                    </Form.Select>
                </Form.Group>
            );
        }

        const InputZip = () => {
            return (
                <Form.Group as={Col} controlId="Zip" >
                    <Form.Control placeholder="Zip" value={form.Zip} onChange={(event) => handleFormChange(event.target.value, 'Zip')} />
                </Form.Group>
            )
        }

        const SaveBtn = () => {
            return (
                <div className='save-button-div'>
                    <Button onClick={handleSave} variant="dark" type="submit" className='save-button'>
                        <b>SAVE DETAILS</b>
                    </Button>
                </div>
            )
        }

        return (
            <div id='address-div' className='form-div'>
                <Form id='address-form' className='address'>
                    <InputAddLine1 />
                    <InputAddLine2 />
                    <Row className="mb-3">
                        <InputCity />
                        <InputState />
                        <InputZip />
                    </Row>
                    <Row>
                        <SaveBtn />
                    </Row>
                </Form>
            </div>
        )
    }

    return (
        <Card id='background' className='background-card'>
            <div id='page-content' className='content'>
                <BillingHeader />
                <BillingForm />
            </div>
        </Card >
    )
}

export default ReviseBilling;