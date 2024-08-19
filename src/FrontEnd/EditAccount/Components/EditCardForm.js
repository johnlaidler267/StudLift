import React from 'react'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'

//IMPORT Icons
import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai'

const EditCardForm = (props) => {
    return (
        <Form style={{ padding: "10px" }}>
            <Row className="mb-3 form-row">
                <Row>
                    <SelectCard
                        cardNameList={props.cardNameList}
                        activeCard={props.activeCard}
                        handleActiveCardChange={props.handleActiveCardChange}
                    />
                    <SetDefaultCard
                        isChecked={props.isChecked}
                        handleCheckboxChange={props.handleCheckboxChange}
                    />
                </Row>
                <InputCardNumber
                    activeCardInfo={props.activeCardInfo}
                    handleEditCardFormChange={props.handleEditCardFormChange}
                />
                <InputCardName
                    activeCardInfo={props.activeCardInfo}
                    handleEditCardFormChange={props.handleEditCardFormChange}
                />
                <InputExpiration
                    activeCardInfo={props.activeCardInfo}
                    handleEditCardFormChange={props.handleEditCardFormChange}
                />
                <InputCVV
                    activeCardInfo={props.activeCardInfo}
                    handleEditCardFormChange={props.handleEditCardFormChange}
                />
            </Row>
            <Row>
                <SaveBtn
                    handleEditCard={props.handleEditCard}
                    navigate={props.navigate}
                    userDetails={props.userDetails}
                    activeCardInfo={props.activeCardInfo}
                    activeCard={props.activeCard}
                    user={props.user}
                    isChecked={props.isChecked}
                />
            </Row>
        </Form>
    )
}

const SaveBtn = ({ handleEditCard, navigate, userDetails, activeCardInfo, activeCard, isChecked, user }) => {
    return (
        <div className='add-card-div'>
            <Button onClick={(event) => handleEditCard(event, userDetails, user, activeCardInfo, activeCard.id, isChecked).then(navigate('/edit-profile'))} variant="dark" type="submit" className='save-button'>
                <b>SAVE INFORMATION</b>
            </Button>
        </div>
    )
}

const SelectCard = ({ cardNameList, activeCard, handleActiveCardChange }) => {
    return (
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
    )
}

const SetDefaultCard = ({ isChecked, handleCheckboxChange }) => {
    return (
        <InputGroup className="mt-2 card-select" controlId="cardSelect" >
            <Form.Check inline label='Mark default' checked={isChecked} onChange={handleCheckboxChange}></Form.Check>
        </InputGroup>
    )
}

const InputCardNumber = ({ activeCardInfo, handleEditCardFormChange }) => {
    return (
        <InputGroup className="mb-3" controlId="cardNumber">
            <Form.Control placeholder="Card Number" style={{ borderRight: "none" }} value={activeCardInfo.Number} onChange={(event) => handleEditCardFormChange(event.target.value, 'Number')} />
            <InputGroup.Text id="lock-icon" className='input-icon'><AiFillLock /></InputGroup.Text>
        </InputGroup>
    );
}

const InputCardName = ({ activeCardInfo, handleEditCardFormChange }) => {
    return (
        <Form.Group className="mb-3" controlId="nameOnCard">
            <Form.Control placeholder="Name on Card (e.g. 'John Smith')" value={activeCardInfo.Name} onChange={(event) => handleEditCardFormChange(event.target.value, 'Name')} />
        </Form.Group>
    )
}

const InputExpiration = ({ activeCardInfo, handleEditCardFormChange }) => {
    return (
        <Form.Group as={Col}>
            <Form.Control placeholder="Expiration Date (MM/YY)" value={activeCardInfo.Expiration} onChange={(event) => handleEditCardFormChange(event.target.value, 'Expiration')} />
        </Form.Group>
    )
}

const InputCVV = ({ activeCardInfo, handleEditCardFormChange }) => {
    return (
        <InputGroup as={Col}>
            <Form.Control placeholder="CVV" style={{ borderRight: "none" }} value={activeCardInfo.CVV} onChange={(event) => handleEditCardFormChange(event.target.value, 'CVV')} />
            <InputGroup.Text id="question-mark-icon" className='input-icon'><AiFillQuestionCircle /> </InputGroup.Text>
        </InputGroup>
    )
}

export default EditCardForm;