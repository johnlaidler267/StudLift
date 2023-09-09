//* A list of all the DB requests specific to revising payment methods.
//================================================================
// -> Update Card Info 

export const updateCard = async (isChecked, updatedCard, cardIndex, cardList, firebaseId) => {
    cardList[cardIndex] = updatedCard; //replace the CC at the specified index        
    const response = await fetch(`http://localhost:3000/record/updateCard/${firebaseId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Cards: cardList, isChecked: isChecked, cardIndex: cardIndex }),
    }).catch(err => {
        window.alert(err)
        return;
    });
}
//================================================================
// -> Add New Card

export const addCard = async (newCard, cardList, firebaseId) => {
    cardList.push(newCard); //add the CC to the end of the list
    console.log("The updated card list will be: " + JSON.stringify(cardList[0]) + " " + JSON.stringify(cardList[1]))
    const response = await fetch(`http://localhost:3000/record/addCard/${firebaseId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cardList),
    }).catch(err => {
        window.alert(err)
        return;
    });
}
//================================================================