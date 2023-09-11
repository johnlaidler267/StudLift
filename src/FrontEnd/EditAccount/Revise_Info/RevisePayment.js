//custom styling
import '../EditAccount.css';

//react components
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, InputGroup, Row, Col, Form, Accordion, Button } from 'react-bootstrap';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'

//Import custom functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';
import { getCardNameList, handleEditCard, handleAddCard } from './RevisePaymentFunctions'

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebasedb } from '../../../BackEnd/firebase/firebase';

const RevisePayment = () => {
    //================================================================
    // -> Initialize the navigate function to redirect to other pages
    const navigate = useNavigate();
    //================================================================
    // -> store the user logged in in the user variable
    const [user, loading] = useAuthState(auth);
    //================================================================
    // -> Initialize variables for storing data

    const [userDetails, setUserDetails] = useState({}); //Stores user data

    const [cardList, setCardList] = useState([]); //List of card objects
    const [cardNameList, setCardNameList] = useState([]); //List of card names

    const [activeCard, setActiveCard] = useState({}); //The name of the active card
    const [activeCardInfo, setActiveCardInfo] = useState({}); //The info of the active card

    const [newCardInfo, setNewCardInfo] = useState({}); //The info for the new card

    const [isChecked, setIsChecked] = useState(false); //Whether the checkbox is checked

    //================================================================
    //-> Pull user details from MongoDB

    useEffect(() => {
        try {
            getUserDetails(user.uid).then((data) => {
                //-> Set the account userDetails 
                setUserDetails(data);

                //-> Set the exisiting card information
                setCardList(data.Cards);

                //-> Get a list of card names E.g. "DiscoverIt ending in •••• 1234"
                const nameList = getCardNameList(data.Cards, data.DefaultCardIdx);

                // Set the card names
                setCardNameList(nameList);

                const defaultCardName = nameList[data.DefaultCardIdx];
                const defaultCard = data.Cards[data.DefaultCardIdx];

                //Set the active card to the first by default
                setActiveCard(defaultCardName);

                //Set the info for the active card to the first by default
                setActiveCardInfo({
                    Name: defaultCard.Name || '',
                    Type: defaultCard.Type || '',
                    Number: defaultCard.Number || '',
                    Expiration: defaultCard.Expiration || '',
                    CVV: defaultCard.CVV || '',
                });
            })
        }
        catch {
            alert("Error retrieving user details");
            setUserDetails(null);
        }
    }, []);


    //=================================================================
    // -> Handle the edit card form change
    const handleEditCardFormChange = (value, field) => {
        setActiveCardInfo(activeCardInfo => ({
            ...activeCardInfo,
            [field]: value
        }));
    }
    //=================================================================
    // -> Handle the new card form change
    const handleNewCardFormChange = (value, field) => {
        setNewCardInfo(newCardInfo => ({
            ...newCardInfo,
            [field]: value
        }));
    }
    //=================================================================
    // -> Handle the active card (info to be edited) selection change
    const handleActiveCardChange = (event) => {
        //The active card = card with index # of the selected card option
        const activeCardId = JSON.parse(event.target.value).id;

        setActiveCard(cardNameList[activeCardId]);
        setActiveCardInfo(cardList[activeCardId]);
    }
    //=================================================================
    //-> Function to handle checkbox 'defaultCard' change
    const handleCheckboxChange = (event) => {
        console.log("The checkbox is checked: " + event.target.checked);
        const { checked } = event.target;
        setIsChecked(checked);
    };
    //================================================================

    return (
        <div>
            <Card id='background' className='background-card'>

                <div id='page-content' className='content'>

                    <div id='header' className='header'>
                        <h3>REVISE PAYMENT DETAILS</h3>
                        <p className='sub-header'>Edit your payment information or create a new card.</p>
                    </div>

                    <div id='address-div' className='form-div'>
                        <Accordion defaultActiveKey="edit-card" >

                            {/* Edit-card */}
                            <Accordion.Item eventKey="edit-card" className='accordion-item'>

                                <Accordion.Header >
                                    <b>Edit card information </b>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Form style={{ padding: "10px" }}>

                                        <Row className="mb-3 form-row">

                                            <Row>
                                                {/* Card selection */}
                                                <InputGroup className="mb-3 card-select" controlId="cardSelect" >
                                                    <Form.Select onChange={handleActiveCardChange}>
                                                        <option value={JSON.stringify(activeCard)}>{activeCard.name}</option>
                                                        {
                                                            cardNameList.map(currCard => {
                                                                if (currCard.name != activeCard.name)
                                                                    return (<option value={JSON.stringify(currCard)} key={currCard.id}>{currCard.name}</option>)
                                                            })
                                                        }
                                                    </Form.Select>
                                                </InputGroup>

                                                {/* Mark default checkbox */}
                                                <InputGroup className="mt-2 card-select" controlId="cardSelect" >
                                                    <Form.Check inline label='Mark default' checked={isChecked} onChange={handleCheckboxChange}></Form.Check>
                                                </InputGroup>
                                            </Row>

                                            <InputGroup className="mb-3" controlId="cardNumber">
                                                <Form.Control placeholder="Card Number" style={{ borderRight: "none" }} value={activeCardInfo.Number} onChange={(event) => handleEditCardFormChange(event.target.value, 'Number')} />
                                                <InputGroup.Text id="lock-icon" className='input-icon'><AiFillLock /></InputGroup.Text>
                                            </InputGroup>

                                            <Form.Group className="mb-3" controlId="nameOnCard">
                                                <Form.Control placeholder="Name on Card (e.g. 'John Smith')" value={activeCardInfo.Name} onChange={(event) => handleEditCardFormChange(event.target.value, 'Name')} />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Control placeholder="Expiration Date (MM/YY)" value={activeCardInfo.Expiration} onChange={(event) => handleEditCardFormChange(event.target.value, 'Expiration')} />
                                            </Form.Group>

                                            <InputGroup as={Col}>
                                                <Form.Control placeholder="CVV" style={{ borderRight: "none" }} value={activeCardInfo.CVV} onChange={(event) => handleEditCardFormChange(event.target.value, 'CVV')} />
                                                <InputGroup.Text id="question-mark-icon" className='input-icon'><AiFillQuestionCircle /> </InputGroup.Text>
                                            </InputGroup>
                                        </Row>

                                        <Row>
                                            <div className='add-card-div'>
                                                <Button onClick={(event) => handleEditCard(event, userDetails, user, activeCardInfo, activeCard.id, isChecked).then(navigate('/edit-profile'))} variant="dark" type="submit" className='save-button'>
                                                    <b>SAVE INFORMATION</b>
                                                </Button>
                                            </div>
                                        </Row>

                                    </Form>

                                </Accordion.Body>

                            </Accordion.Item>

                            <Divider><IoMdAddCircleOutline style={{ fontSize: '2em' }} /></Divider>

                            <Accordion.Item eventKey="new-card" className='accordion-item'>
                                <Accordion.Header>
                                    <b>Add a new card</b>
                                </Accordion.Header>

                                <Accordion.Body>

                                    <Form style={{ padding: "10px" }}>

                                        <Row className="mb-3 form-row">

                                            <InputGroup className="mb-3" controlId="cardNumber" >
                                                <Form.Control placeholder="Card Number" style={{ borderRight: "none" }} aria-describedby="lock-icon" value={newCardInfo.Number} onChange={(event) => handleNewCardFormChange(event.target.value, 'Number')} />
                                                <InputGroup.Text id="lock-icon" style={{ backgroundColor: "white", borderLeft: "none" }} ><AiFillLock /> </InputGroup.Text>
                                            </InputGroup>

                                            <Form.Group className="mb-3" controlId="nameOnCard">
                                                <Form.Control placeholder="Name on Card (e.g. 'John Smith')" value={newCardInfo.Name} onChange={(event) => handleNewCardFormChange(event.target.value, 'Name')} />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Control placeholder="Expiration Date (MM/YY)" value={newCardInfo.Expiration} onChange={(event) => handleNewCardFormChange(event.target.value, 'Expiration')} />
                                            </Form.Group>

                                            <InputGroup as={Col}>
                                                <Form.Control placeholder="CVV" aria-describedby="question-icon" style={{ borderRight: "none" }} value={newCardInfo.CVV} onChange={(event) => handleNewCardFormChange(event.target.value, 'CVV')} />
                                                <InputGroup.Text id="question-icon" style={{ backgroundColor: "white", borderLeft: "none" }}><AiFillQuestionCircle /> </InputGroup.Text>
                                            </InputGroup>
                                        </Row>

                                        <Row>
                                            <div className='add-card-div'>
                                                <Button onClick={(event) => handleAddCard(event, userDetails, user, newCardInfo, navigate).then(navigate("/edit-profile"))} variant="dark" type="submit" className='save-button'>
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