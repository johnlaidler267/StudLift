// =================================================================
// -> Fetch the user details from MongoDB

export const getUserDetails = async (firebaseId) => {
    const response = await fetch(`http://localhost:3000/record/${firebaseId}`, {
        method: "GET",
    }).catch(err => {
        window.alert(err)
        return;
    });
    console.log(response);

    if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }
    const userData = await response.json();
    if (!userData) {
        window.alert(`Record with id ${firebaseId} not found`);
        return;
    }
    return userData;
}

// ================================================================= 
// -> Update Shipping Address  

export const updateShippingAddress = async (updatedAddress, userDetails, firebaseId) => {
    userDetails.Shipping = updatedAddress;
    const response = await fetch(`http://localhost:3000/record/updateShipping/${firebaseId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails),
    }).catch(err => {
        window.alert(err)
        return;
    });
}
//================================================================
// -> Update Billing Address  

export const updateBillingAddress = async (updatedAddress, userDetails, firebaseId) => {
    console.log("The updated billing address being sent is: " + JSON.stringify(updatedAddress));
    userDetails.Billing = updatedAddress;
    const response = await fetch(`http://localhost:3000/record/updateBilling/${firebaseId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails),
    }).catch(err => {
        window.alert(err)
        return;
    });
}
//================================================================