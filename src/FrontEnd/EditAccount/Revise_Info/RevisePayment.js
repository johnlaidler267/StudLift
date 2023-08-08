//custom styling
import './Account.css';

//react components
import react from 'react';
import { Card, InputGroup, Row, Col, Form, Accordion, Button } from 'react-bootstrap';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'

const RevisePayment = () => {
    return (
        <div>
            <Card id='background' className='background-card'>

                <div id='page-content' className='content'>

                    <div id='header' className='header'>
                        <h3>REVISE PAYMENT DETAILS</h3>
                        <p className='sub-header'>Edit your payment information or create a new card.</p>
                    </div>

                    <div id='address-div' className='form-div'>
                        <Accordion defaultActiveKey="0" >

                            <Accordion.Item eventKey="0" className='accordion-item'>

                                <Accordion.Header >
                                    <Form.Check
                                        type='radio'
                                        id={`disabled-default-radio`}
                                        style={{ marginRight: "10px" }}
                                    />
                                    <b>Edit card information </b>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Form style={{ padding: "10px" }}>

                                        <Row className="mb-3 form-row">

                                            <InputGroup className="mb-3 card-select" controlId="cardSelect" >
                                                <Form.Select >
                                                    <option>
                                                        <p>Discover it® <br />
                                                            ending in •••• 6352 <br /></p>
                                                    </option>
                                                </Form.Select>
                                            </InputGroup>

                                            <InputGroup className="mb-3" controlId="cardNumber">
                                                <Form.Control placeholder="Card number" aria-describedby="basic-addon1" style={{ borderRight: "none" }} />
                                                <InputGroup.Text id="basic-addon1" className='input-icon'><AiFillLock /> </InputGroup.Text>
                                            </InputGroup>

                                            <Form.Group className="mb-3" controlId="nameOnCard">
                                                <Form.Control placeholder="Name on card" />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Control placeholder="Expiration date (MM/YY)" />
                                            </Form.Group>

                                            <InputGroup as={Col}>
                                                <Form.Control placeholder="Security Code" aria-describedby="basic-addon2" style={{ borderRight: "none" }} />
                                                <InputGroup.Text id="basic-addon2" className='input-icon'><AiFillQuestionCircle /> </InputGroup.Text>
                                            </InputGroup>
                                        </Row>

                                        <Row>
                                            <div className='add-card-div'>
                                                <Button variant="dark" type="submit" className='save-button'>
                                                    <b>SAVE INFORMATION</b>
                                                </Button>
                                            </div>
                                        </Row>

                                    </Form>

                                </Accordion.Body>

                            </Accordion.Item>

                            <Divider><IoMdAddCircleOutline style={{ fontSize: '2em' }} /></Divider>

                            <Accordion.Item eventKey="1" className='accordion-item'>
                                <Accordion.Header>
                                    <Form.Check
                                        type='radio'
                                        id={`disabled-default-radio`}
                                        style={{ marginRight: "10px" }}
                                    /><b>Add a new card</b>
                                </Accordion.Header>

                                <Accordion.Body>

                                    <Form style={{ padding: "10px" }}>

                                        <Row className="mb-3">

                                            <InputGroup className="mb-3" controlId="cardNumber">
                                                <Form.Control placeholder="Card number" aria-describedby="basic-addon1" style={{ borderRight: "none" }} />
                                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "white", borderLeft: "none" }} ><AiFillLock /> </InputGroup.Text>
                                            </InputGroup>

                                            <Form.Group className="mb-3" controlId="nameOnCard">
                                                <Form.Control placeholder="Name on card" />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Control placeholder="Expiration date (MM/YY)" />
                                            </Form.Group>

                                            <InputGroup as={Col}>
                                                <Form.Control placeholder="Security Code" aria-describedby="basic-addon2" style={{ borderRight: "none" }} />
                                                <InputGroup.Text id="basic-addon2" style={{ backgroundColor: "white", borderLeft: "none" }}><AiFillQuestionCircle /> </InputGroup.Text>
                                            </InputGroup>
                                        </Row>

                                        <Row>
                                            <div className='add-card-div'>
                                                <Button variant="dark" type="submit" className='save-button'>
                                                    <b>ADD CARD</b>
                                                </Button>
                                            </div>
                                        </Row>

                                    </Form>

                                </Accordion.Body>

                            </Accordion.Item>

                        </Accordion>
                        <br />


                    </div>
                </div>

            </Card >
        </div >
    )
}

export default RevisePayment;