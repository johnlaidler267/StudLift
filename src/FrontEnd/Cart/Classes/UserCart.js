import CartItem from './CartItem.js'

class UserCart {
    constructor(cartItems, userID, total) {
        this.cartItems = cartItems.map((item) => new CartItem(item.product, item.color, item.size, item.itemID, item.quantity, item.subtotal)) || []; // Initialize an empty cart array
        this.userID = userID
        this.total = total;
    }

    getCartItems() {
        return this.cartItems;
    }

    getCartItem(itemID) {
        const foundItem = this.cartItems.find((cartItem) => cartItem.getItemID() === itemID);
        console.log(`The item found was ${JSON.stringify(foundItem)}`)
        return foundItem;
    }

    increaseQuantity(itemID) {
        console.log(`Increasing the quantity of ${itemID} inside UserCart class.`)

        this.cartItems.forEach((cartItem) => {
            if (cartItem.getItemID() === itemID) {
                cartItem.increaseQuantity();
            }
        });

        this.setTotal();
        this.updateCartInDatabase(this, this.userID);
    }

    decreaseQuantity(itemID) {
        console.log(`Decreasing the quantity of ${itemID} inside UserCart class.`)

        this.cartItems.forEach((cartItem) => {
            if (cartItem.getItemID() === itemID) {
                cartItem.decreaseQuantity();
            }
        });

        this.setTotal();
        this.updateCartInDatabase(this, this.userID);
    }

    // Function to add a product to the cart
    addProduct(cartItem) {
        console.log(`Adding product ${cartItem.getProduct()._name} inside UserCart class.`)

        // Update the cart by adding the new product
        this.cartItems.push(cartItem);

        //Update the cart total
        this.setTotal();

        // Send a PATCH request to update the cart in the database
        this.updateCartInDatabase(this, this.userID);
    }

    // Function to delete a product from the cart
    deleteProduct(itemID) {
        console.log(`Delete Product ${itemID}`)

        // Filter out the product to be deleted from the cart
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.itemID !== itemID);

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
            total += parseFloat(cartItem.getSubtotal());
        });
        this.total = parseFloat(total).toFixed(2);
    }

    getTotal() {
        return this.total;
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