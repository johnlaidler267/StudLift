class UserCart {
    constructor(cartItems, userID, total) {
        this.cartItems = cartItems; // Initialize an empty cart array
        this.userID = userID
        this.total = total;
    }

    get getCartItems() {
        return this.cartItems;
    }

    // Function to add a product to the cart
    addProduct(cartItem) {
        // Update the cart by adding the new product
        this.cartItems.push(cartItem);

        this.setTotal();

        // Send a PATCH request to update the cart in the database
        this.updateCartInDatabase(this, this.userID);
    }

    // Function to delete a product from the cart
    deleteProduct(itemID) {
        console.log(`Delete Product ${itemID}`)

        console.log(`Cart items before deletion: ${this.cartItems.length}`)
        console.log(`The cart items inside deleteProduct ${JSON.stringify(this.cartItems)}`)
        // Filter out the product to be deleted from the cart
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.itemID !== itemID);

        console.log(`Cart items after deletion: ${this.cartItems.length} `)

        this.setTotal();

        // Send a PATCH request to update the cart in the database
        this.updateCartInDatabase(this, this.userID);
    }

    // Function to get the current cart
    getCart() {
        return this.cartItems;
    }

    setTotal() {
        let total = 0;
        this.cartItems.forEach((cartItem) => {
            total += parseFloat(cartItem.product._price);
        });
        this.total = total;
    }

    // Function to send a PATCH request to update the cart in the database
    updateCartInDatabase = async (newCart, firebaseID) => {
        const response = await fetch(`http://localhost:3000/record/updateCart/${firebaseID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCart),
        }).catch(err => {
            window.alert("Error in UserCar.js")
            return;
        });
    }
}

export default UserCart;