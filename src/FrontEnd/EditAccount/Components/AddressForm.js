import React from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'


const AddressForm = ({ form, setForm, handleSave }) => {
    //================================================================
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
    return (
        <Form id='address-form' className='address'>
            <InputAddLine1 AddLine1={form.AddLine1} handleFormChange={handleFormChange} />
            <InputAddLine2 AddLine2={form.AddLine2} handleFormChange={handleFormChange} />
            <Row className="mb-3">
                <InputCity City={form.City} handleFormChange={handleFormChange} />
                <InputState State={form.State} handleFormChange={handleFormChange} />
                <InputZip Zip={form.Zip} handleFormChange={handleFormChange} />
            </Row>
            <Row>
                <SaveBtn HandleSave={handleSave} />
            </Row>
        </Form>
    )
}

const InputAddLine1 = ({ AddLine1, handleFormChange }) => {
    return (
        <Form.Group className="mb-3" controlId="AddLine1">
            <Form.Control placeholder="Address Line 1" value={AddLine1} onChange={(event) => handleFormChange(event.target.value, 'AddLine1')} />
        </Form.Group>
    )
}

const InputAddLine2 = ({ AddLine2, handleFormChange }) => {
    return (
        <Form.Group className="mb-3" controlId="AddLine2">
            <Form.Control placeholder="Apartment, studio, or floor" value={AddLine2} onChange={(event) => handleFormChange(event.target.value, 'AddLine2')} />
        </Form.Group>
    )
}

const InputCity = ({ City, handleFormChange }) => {
    return (
        <Form.Group as={Col} controlId="City">
            <Form.Control placeholder="City" value={City} onChange={(event) => handleFormChange(event.target.value, 'City')} />
        </Form.Group>
    )
}

const InputState = ({ State, handleFormChange }) => {

    const stateAbbreviations = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    return (
        <Form.Group as={Col} controlId="State" >
            <Form.Select defaultValue="State" value={State} onChange={(event) => handleFormChange(event.target.value, 'State')}>
                <option>State</option>
                {stateAbbreviations.map((state) => <option>{state}</option>)}
            </Form.Select>
        </Form.Group>
    );
}

const InputZip = ({ Zip, handleFormChange }) => {
    return (
        <Form.Group as={Col} controlId="Zip" >
            <Form.Control placeholder="Zip" value={Zip} onChange={(event) => handleFormChange(event.target.value, 'Zip')} />
        </Form.Group>
    )
}

const SaveBtn = ({ HandleSave, handleFormChange }) => {
    return (
        <div className='save-button-div'>
            <Button onClick={HandleSave} variant="dark" type="submit" className='save-button'>
                <b>SAVE DETAILS</b>
            </Button>
        </div>
    )
}

export default AddressForm;