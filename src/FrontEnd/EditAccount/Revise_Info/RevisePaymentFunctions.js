import { updateCard, updateDefaultCard, addCard } from './RevisePayment_DBRequests';


//* A list of functions utilized by the RevisedPayment page.
//================================================================================================
//-> Given an array of card objects, return a list of all the card names
//E.g. "DiscoverIt ending in •••• 1234"

export const getCardNameList = (cards, defaultIdx) => {
    const cardsCpy = [...cards]; //make a copy of the cards array
    let cardNameList = [];
    let id = 0;

    console.log("Default indx inside the getCardNameList: " + defaultIdx)

    cardsCpy.forEach(card => {
        console.log("card in the name list function: " + JSON.stringify(card));
        const cardType = card.Type; // get the type of card
        const lastFour = card.Number.substring(card.Number.length - 4); // get the last 4 digits from the #
        const name = cardType + " ending in •••• " + lastFour;
        cardNameList.push({ name: name, id: id });
        id++;
    });

    return cardNameList;
}
//================================================================================================
// -> Save the edit-card form changes to MongoDB

export const handleEditCard = async (event, userDetails, user, activeCardInfo, activeCardIndex, isChecked) => {
    event.preventDefault();
    try {
        //................................................................
        // -> Add to MongoDB database

        //Create a data object containing user info
        const updatedCard = {
            Name: activeCardInfo.Name,
            Type: activeCardInfo.Type,
            Number: activeCardInfo.Number,
            Expiration: activeCardInfo.Expiration,
            CVV: activeCardInfo.CVV,
        };

        //Make a PATCH request to update MongoDB
        updateCard(isChecked, updatedCard, activeCardIndex, userDetails.Cards, user.uid)
    }
    catch (error) {
        alert(error);
    }
}
//================================================================
// -> Save the new-card form changes to MongoDB

export const handleAddCard = async (event, userDetails, user, newCardInfo) => {
    event.preventDefault();
    try {
        //................................................................
        // -> Add to MongoDB database

        //Create a data object containing user info
        const newCard = {
            Name: newCardInfo.Name,
            Type: newCardInfo.CardType || "Visa",
            Number: newCardInfo.Number,
            Expiration: newCardInfo.Expiration,
            CVV: newCardInfo.CVV,
        };

        //Make a PATCH request to update MongoDB
        addCard(newCard, userDetails.Cards, user.uid);
    }
    catch (error) {
        alert(error);
    }
}
//================================================