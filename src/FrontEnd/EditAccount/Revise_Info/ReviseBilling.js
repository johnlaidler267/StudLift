//custom styling
import '../EditAccount.css';

//react components
import react from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

const ReviseBilling = () => {
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

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control placeholder="Address Line 1" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Control placeholder="City" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Select defaultValue="State">
                                        <option>State</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Control placeholder="Zip" />
                                </Form.Group>
                            </Row>

                            <Row>
                                <div className='save-button-div'>
                                    <Button variant="dark" type="submit" className='save-button'>
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