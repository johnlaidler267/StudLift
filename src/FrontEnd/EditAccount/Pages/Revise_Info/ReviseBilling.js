//IMPORT cstom styling
import '../../Styling/EditAccount.css'

//IMPORT React elements
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

//IMPORT Custom Components
import AddressForm from '../../Components/AddressForm';

//IMPORT Helper Functions
import { getUserDetails, updateBillingAddress } from '../../../../BackEnd/commonFunctions';

//IMPORT Context
import UserInfoContext from '../../../../Contexts/UserInfoContext'

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

    const [userInfoContext, setUserInfoContext] = useContext(UserInfoContext)
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
            setUserInfoContext("BillingAddress", updatedAddress)
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
            <div className='header'>
                <h3>REVISE BILLING DETAILS</h3>
                <p className='sub-header'>Edit your billing address details below.</p>
            </div>
        )
    }

    return (
        <Card id='background' className='background-card'>
            <div id='page-content' className='content'>
                <BillingHeader />
                <AddressForm
                    form={form}
                    setForm={setForm}
                    handleSave={handleSave}
                />
            </div>
        </Card >
    )
}

export default ReviseBilling;