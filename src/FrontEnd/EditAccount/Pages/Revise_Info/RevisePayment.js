//IMPORT Custom styling
import '../../Styling/EditAccount.css'

//IMPORT React elements
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, InputGroup, Row, Col, Form, Accordion, Button } from 'react-bootstrap';

//IMPORT MUI elements
import Divider from '@mui/material/Divider';

//IMPORT Custom Components
import EditCardForm from '../../Components/EditCardForm'

//IMPORT Icons
import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'

//IMPORT custom functions
import { getUserDetails } from '../../../../BackEnd/commonFunctions';
import { getCardNameList, handleEditCard, handleAddCard } from '../../HelperFunctions/RevisePaymentFunctions'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../BackEnd/firebase/firebase';

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
        const { checked } = event.target;
        setIsChecked(checked);
    };
    //================================================================

    const RevisePaymentHeader = () => {
        return (
            <div className='header'>
                <h3>REVISE PAYMENT DETAILS</h3><br />
                <p className='sub-header'>Edit your payment information or create a new card.</p>
            </div>
        )
    }

    const EditCardHeader = () => {
        return (
            <Accordion.Header >
                <b>Edit card information </b>
            </Accordion.Header>
        )
    }

    const AddCard = () => {

        const AddCardHeader = () => {
            return (
                <Accordion.Header>
                    <b>Add a new card</b>
                </Accordion.Header>
            )
        }

        const AddCardForm = () => {

            const InputCardNumber = () => {
                return (
                    <InputGroup className="mb-3" controlId="cardNumber" >
                        <Form.Control placeholder="Card Number" style={{ borderRight: "none" }} aria-describedby="lock-icon" value={newCardInfo.Number} onChange={(event) => handleNewCardFormChange(event.target.value, 'Number')} />
                        <InputGroup.Text id="lock-icon" style={{ backgroundColor: "white", borderLeft: "none" }} ><AiFillLock /> </InputGroup.Text>
                    </InputGroup>
                )
            }

            const InputCardName = () => {
                return (
                    <Form.Group className="mb-3" controlId="nameOnCard" >
                        <Form.Control placeholder="Name on Card (e.g. 'John Smith')" value={newCardInfo.Name} onChange={(event) => handleNewCardFormChange(event.target.value, 'Name')} />
                    </Form.Group >
                )
            }

            const InputExpiration = () => {
                return (
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Expiration Date (MM/YY)" value={newCardInfo.Expiration} onChange={(event) => handleNewCardFormChange(event.target.value, 'Expiration')} />
                    </Form.Group>
                )
            }

            const InputCVV = () => {
                return (
                    <InputGroup as={Col}>
                        <Form.Control placeholder="CVV" aria-describedby="question-icon" style={{ borderRight: "none" }} value={newCardInfo.CVV} onChange={(event) => handleNewCardFormChange(event.target.value, 'CVV')} />
                        <InputGroup.Text id="question-icon" style={{ backgroundColor: "white", borderLeft: "none" }}><AiFillQuestionCircle /> </InputGroup.Text>
                    </InputGroup>
                )
            }

            const AddCardBtn = () => {
                return (
                    <div className='add-card-div'>
                        <Button onClick={(event) => handleAddCard(event, userDetails, user, newCardInfo, navigate).then(navigate("/edit-profile"))} variant="dark" type="submit" className='save-button'>
                            <b>ADD CARD</b>
                        </Button>
                    </div>
                )
            }

            return (
                <Form style={{ padding: "10px" }}>
                    <Row className="mb-3 form-row">
                        <InputCardNumber />
                        <InputCardName />
                        <InputExpiration />
                        <InputCVV />
                    </Row>
                    <Row>
                        <AddCardBtn />
                    </Row>
                </Form>
            )
        }

        return (
            <Accordion.Item eventKey="new-card" className='accordion-item'>
                <AddCardHeader />
                <Accordion.Body>
                    <AddCardForm />
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    const CardInfoDivider = () => {
        return (
            <Divider><IoMdAddCircleOutline style={{ fontSize: '2em' }} /></Divider>
        )
    }

    return (
        <div>
            <Card id='background' className='background-card'>
                <div id='page-content' className='content'>
                    <RevisePaymentHeader />
                    <div className='form-div'>
                        <Accordion defaultActiveKey="edit-card" >
                            <Accordion.Item eventKey="edit-card" className='accordion-item' >
                                <EditCardHeader />
                                <Accordion.Body>
                                    <EditCardForm
                                        cardNameList={cardNameList}
                                        activeCard={activeCard}
                                        handleActiveCardChange={handleActiveCardChange}
                                        activeCardInfo={activeCardInfo}
                                        handleEditCardFormChange={handleEditCardFormChange}
                                        isChecked={isChecked}
                                        handleCheckboxChange={handleCheckboxChange}
                                        handleEditCard={handleEditCard}
                                        navigate={navigate}
                                        userDetails={userDetails}
                                        user={user}
                                    />
                                </Accordion.Body>
                            </Accordion.Item >
                            <CardInfoDivider />
                            <AddCard />
                        </Accordion>
                        <br />
                    </div>
                </div>
            </Card >
        </div >
    )
}

export default RevisePayment;