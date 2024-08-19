//IMPORT custom styling
import '../../Styling/EditAccount.css'

//IMPORT React elements
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

//IMPORT Custom Components
import AddressForm from '../../Components/AddressForm';

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../BackEnd/firebase/firebase';

//IMPORT Helper functions
import { getUserDetails, updateShippingAddress } from '../../../../BackEnd/commonFunctions';

const ReviseShipping = () => {
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

                //-> Set the exisiting shipping address information
                setExistingAddress(data.Shipping);

                // -> Initialize state variables for form fields
                setForm({
                    AddLine1: data.Shipping.AddLine1,
                    AddLine2: data.Shipping.AddLine2,
                    City: data.Shipping.City,
                    State: data.Shipping.State,
                    Zip: data.Shipping.Zip,
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
            updateShippingAddress(updatedAddress, userDetails, user.uid)
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

    const ShippingHeader = () => {
        return (
            <div className='header'>
                <h3>REVISE SHIPPING DETAILS</h3>
                <p className='sub-header'>Edit your shipping address details below.</p>
            </div>
        )
    }

    return (
        <Card id='background' className='background-card'>
            <div id='page-content' className='content'>
                <ShippingHeader />
                <AddressForm
                    form={form}
                    setForm={setForm}
                    handleSave={handleSave}
                />
            </div>
        </Card >
    )
}

export default ReviseShipping;